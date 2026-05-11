(function () {
  /* ── Progress bar ─────────────────────────────── */
  const bar = document.getElementById('progress-bar');
  if (bar) {
    window.addEventListener('scroll', () => {
      const scrolled = document.documentElement.scrollTop;
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      bar.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', pct);
    }, { passive: true });
  }

  /* ── Mobile navigation ────────────────────────── */
  document.documentElement.classList.add("js-enabled");

  function wireMenuToggle(toggleSelector, menuSelector, openClass) {
    const toggle = document.querySelector(toggleSelector);
    const menu = document.querySelector(menuSelector);
    if (!toggle || !menu) return null;

    function setOpen(isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle(openClass, isOpen);
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        setOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (!menu.classList.contains(openClass)) return;
      if (menu.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    return { setOpen };
  }

  wireMenuToggle(".site-nav-toggle", ".site-nav-links", "is-open");
  wireMenuToggle(".section-nav-toggle", ".tab-nav", "is-open");

  const tabs = Array.from(document.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));
  const sectionLabel = document.querySelector(".section-nav-current");

  function updateSectionLabel() {
    const selected = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
    if (sectionLabel && selected) {
      sectionLabel.textContent = selected.textContent.trim();
    }
  }

  function activateTab(id, updateHash) {
    const target = panels.find((panel) => panel.id === id) ? id : "get-started";
    tabs.forEach((tab) => {
      const selected = tab.dataset.tabTarget === target;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== target;
    });
    updateSectionLabel();
    if (updateHash) {
      history.replaceState(null, "", "#" + target);
    }
  }

  const downloadFeedback = document.createElement("div");
  downloadFeedback.className = "sr-only";
  downloadFeedback.setAttribute("aria-live", "polite");
  document.body.append(downloadFeedback);

  document.querySelectorAll("[data-guide-hash]").forEach((downloadButton) => {
    downloadButton.addEventListener("click", () => {
      const originalLabel = downloadButton.dataset.originalLabel || downloadButton.textContent;
      downloadButton.dataset.originalLabel = originalLabel;
      downloadButton.textContent = "Download started. Guide opened.";
      downloadFeedback.textContent = "Download started. Install guide opened.";
      const guideHash = (downloadButton.dataset.guideHash || "#install").replace("#", "");
      window.setTimeout(() => {
        activateTab(guideHash, true);
        const target = document.getElementById(guideHash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
      window.setTimeout(() => {
        downloadButton.textContent = originalLabel;
      }, 2400);
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tabTarget, true));
    tab.addEventListener("keydown", (event) => {
      const index = tabs.indexOf(tab);
      let next = null;
      if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
      if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === "Home") next = tabs[0];
      if (event.key === "End") next = tabs[tabs.length - 1];
      if (!next) return;
      event.preventDefault();
      next.focus();
      activateTab(next.dataset.tabTarget, true);
    });
  });

  const exampleTabs = Array.from(document.querySelectorAll("[data-example-target]"));
  const examplePanels = Array.from(document.querySelectorAll(".example-panel"));

  function activateExamplePanel(id) {
    const target = examplePanels.find((panel) => panel.id === id) ? id : "example-one-panel";
    exampleTabs.forEach((tab) => {
      const selected = tab.dataset.exampleTarget === target;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    examplePanels.forEach((panel) => {
      panel.hidden = panel.id !== target;
    });
  }

  exampleTabs.forEach((tab) => {
    tab.addEventListener("click", () => activateExamplePanel(tab.dataset.exampleTarget));
    tab.addEventListener("keydown", (event) => {
      const index = exampleTabs.indexOf(tab);
      let next = null;
      if (event.key === "ArrowRight") next = exampleTabs[(index + 1) % exampleTabs.length];
      if (event.key === "ArrowLeft") next = exampleTabs[(index - 1 + exampleTabs.length) % exampleTabs.length];
      if (event.key === "Home") next = exampleTabs[0];
      if (event.key === "End") next = exampleTabs[exampleTabs.length - 1];
      if (!next) return;
      event.preventDefault();
      next.focus();
      activateExamplePanel(next.dataset.exampleTarget);
    });
  });

  const reportButtons = Array.from(document.querySelectorAll("[data-report-src]"));
  const reportFrame = document.getElementById("example-two-report-frame");
  const openSelectedReport = document.getElementById("open-selected-report");

  function activateReportPreview(button) {
    if (!button || !reportFrame || !openSelectedReport) return;
    const src = button.dataset.reportSrc;
    const title = button.dataset.reportTitle || button.textContent.trim();
    reportButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    reportFrame.src = src;
    reportFrame.title = title + " preview";
    openSelectedReport.href = src;
  }

  reportButtons.forEach((button) => {
    button.addEventListener("click", () => activateReportPreview(button));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").slice(1);
      if (!id) return;
      const panel = panels.find((item) => item.id === id);
      if (panel) {
        event.preventDefault();
        activateTab(id, true);
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.value);
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = original;
        }, 1500);
      } catch (_error) {
        target.focus();
        target.select();
      }
    });
  });

  const initial = window.location.hash ? window.location.hash.slice(1) : "get-started";
  activateTab(initial, false);
  activateExamplePanel("example-one-panel");
})();
