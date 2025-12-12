(function () {
  const COOKIE_NAME = "gd_consent";
  const ONE_YEAR = 60 * 60 * 24 * 365;

  function readCookie(name) {
    const parts = document.cookie.split(";").map((p) => p.trim());
    for (const part of parts) {
      if (!part.startsWith(name + "=")) continue;
      return decodeURIComponent(part.slice(name.length + 1));
    }
    return null;
  }

  function writeCookie(name, value) {
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      `; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax` +
      secure;
  }

  function getConsent() {
    const raw = readCookie(COOKIE_NAME);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return {
        necessary: true,
        analytics: !!parsed.analytics,
        marketing: !!parsed.marketing,
        updatedAt: parsed.updatedAt || null,
      };
    } catch {
      return null;
    }
  }

  function setConsent(next) {
    const value = JSON.stringify({
      analytics: !!next.analytics,
      marketing: !!next.marketing,
      updatedAt: new Date().toISOString(),
    });
    writeCookie(COOKIE_NAME, value);

    window.dispatchEvent(
      new CustomEvent("gd:consent-changed", {
        detail: getConsent(),
      })
    );

    activateDeferredScripts();
  }

  function activateDeferredScripts() {
    const consent = getConsent();
    if (!consent) return;

    const scripts = document.querySelectorAll(
      'script[type="text/plain"][data-consent-category]'
    );

    scripts.forEach((s) => {
      const category = s.getAttribute("data-consent-category");
      if (category === "analytics" && !consent.analytics) return;
      if (category === "marketing" && !consent.marketing) return;

      const replacement = document.createElement("script");
      for (const attr of s.attributes) {
        if (attr.name === "type" || attr.name === "data-consent-category") continue;
        replacement.setAttribute(attr.name, attr.value);
      }
      replacement.text = s.text || "";
      s.parentNode?.insertBefore(replacement, s);
      s.remove();
    });
  }

  function initBanner() {
    const banner = document.querySelector("[data-cookie-consent]");
    if (!banner) return;

    const form = banner.querySelector("[data-cookie-form]");
    const analytics = banner.querySelector('input[name="analytics"]');
    const marketing = banner.querySelector('input[name="marketing"]');

    function open() {
      banner.hidden = false;
      banner.querySelector('[data-consent-action="accept-all"]')?.focus();
      const current = getConsent();
      if (current) {
        if (analytics) analytics.checked = !!current.analytics;
        if (marketing) marketing.checked = !!current.marketing;
      }
    }

    function close() {
      banner.hidden = true;
    }

    function acceptAll() {
      setConsent({ analytics: true, marketing: true });
      close();
    }

    function rejectNonEssential() {
      setConsent({ analytics: false, marketing: false });
      close();
    }

    function save() {
      setConsent({
        analytics: !!analytics?.checked,
        marketing: !!marketing?.checked,
      });
      close();
    }

    banner.addEventListener("click", (e) => {
      const btn = e.target?.closest?.("[data-consent-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-consent-action");
      if (action === "accept-all") acceptAll();
      if (action === "reject") rejectNonEssential();
      if (action === "save") save();
    });

    document.addEventListener("click", (e) => {
      const opener = e.target?.closest?.("[data-open-cookie-preferences]");
      if (!opener) return;
      e.preventDefault();
      open();
    });

    window.gdConsent = {
      get: getConsent,
      set: setConsent,
      open,
    };

    // Show banner only if consent missing
    if (!getConsent()) open();
    activateDeferredScripts();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }
})();

