(function () {
  const tabs = Array.from(document.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));

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
})();
