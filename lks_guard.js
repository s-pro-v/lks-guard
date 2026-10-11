(function () {
  "use strict";

  var d = document,
    $ = function (id) {
      return d.getElementById(id);
    };

  function b() {
    return d.body || d.documentElement;
  }

  if ($("L0")) return;

  var S = d.currentScript;
  if (!S) {
    for (var T = d.getElementsByTagName("script"), i = T.length; i--;) {
      if ((T[i].src || "").toLowerCase().indexOf("lks-guard") >= 0) {
        S = T[i];
        break;
      }
    }
  }

  var C = (window.LKS_GUARD = window.LKS_GUARD || {}),
    H =
      C.HUB_URL ||
      (S && S.getAttribute("data-lks-hub")) ||
      "https://s-pro-v.github.io/guard/",
    SK =
      C.SESSION_KEY ||
      (S && S.getAttribute("data-lks-session-key")) ||
      "lks_vault_auth",
    SDK =
      C.SESSION_DATE_KEY ||
      (S && S.getAttribute("data-lks-session-date-key")) ||
      "lks_vault_auth_date",
    ALLOWED_HASHES = C.ALLOWED_HASHES || [
      "3cdf2dabfe18fb4d0e1f39fc86f836ed20ef0510d0f373b8071417906842bb93"
    ];

  var css = "" +
    ":root{--shadow-drop:rgba(32,32,32,0.4) 0px 0px 0px 2px,rgba(0,0,0,0.65) 0px 4px 6px -1px,rgba(255,255,255,0.08) 0px 1px 0px inset;--shadow-inset:inset 0px 0px 0px 2px rgba(32,32,32,0.4),inset 0px 4px 6px -1px rgba(0,0,0,0.65),inset 0px 1px 0px rgba(255,255,255,0.08);--shadow-hover:rgba(32,32,32,0.2) 0px 0px 0px 1px,rgba(0,0,0,0.325) 0px 2px 3px -0.5px,rgba(255,255,255,0.04) 0px 0.5px 0px inset;--padding:0.125rem;--gap:0.125rem;--bg-color:#121212;--panel-bg:#2a2a2a;--card-bg:#1e1e1e;--bg-secondary:#252526;--bg-tertiary:#2e2e2e;--border-color:#2a2a2a;--border-color-hover:#444444;--hover-bg:#3c3c3c;--text-muted:#858585;--text-color:#e0e0e0;--text-main:#e0e0e0;--highlight-color:#f36c00;--danger-color:#dc3545;--success-color:#28a745;--warning-color:#ffc107;--font-main:\"JetBrains Mono\",monaco,courier,monospace;--font-code:\"Share Tech Mono\",monospace;--bg-mode:repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(255,255,255,0.03) 10px,rgba(255,255,255,0.03) 11px);--bg-grid-size:20px 20px;--bg-grid:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);--bg-img:url(\"https://raw.githubusercontent.com/s-pro-v/img/refs/heads/main/G%20img/g1.png\")}" +
    ":root[theme=\"light\"]{--bg-color:#f8f9fa;--panel-bg:#f0f0f2;--card-bg:#ffffff;--bg-secondary:#e9ecef;--bg-tertiary:#e8e8e8;--border-color:#ced4da;--border-color-hover:#adb5bd;--hover-bg:#e2e6ea;--text-color:#212529;--text-muted:#6c757d;--shadow-drop:rgba(0,0,0,0.25) 0px 1px 2px 0px,rgba(78,78,78,0.15) 0px 2px 5px 1px;--shadow-inset:inset rgba(78,78,78,0.18) 0px 2px 5px 1px,inset rgba(0,0,0,0.25) 0px 1px 2px 0px;--shadow-hover:rgba(32,32,32,0.2) 0px 0px 0px 1px,rgba(0,0,0,0.3) 0px 2px 4px -0.5px;--bg-mode:repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(0,0,0,0.03) 10px,rgba(0,0,0,0.03) 11px);--bg-grid:linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)}" +
    "#L0 *{box-sizing:border-box;border-radius:0 !important;user-select:none;outline:none}#L-shield-badge *{box-sizing:border-box;border-radius:0 !important;user-select:none;outline:none}" +
    "#L0{position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center;background:rgba(10,10,10,0.85);backdrop-filter:blur(6px);padding:16px;opacity:1;visibility:visible;transition:opacity 0.25s ease,visibility 0.25s ease}" +
    "#L0.d{opacity:0;visibility:hidden;pointer-events:none}" +
    "#L1{position:relative;width:100%;max-width:440px;background:var(--panel-bg);border:1px solid var(--border-color);border-top:3px solid var(--highlight-color);box-shadow:var(--shadow-drop);display:flex;flex-direction:column;transition:border-color 0.3s ease;font-family:var(--font-main)}" +
    ".lks-bracket{position:absolute;width:12px;height:12px;border:2px solid var(--highlight-color);pointer-events:none;z-index:20;transition:border-color 0.3s ease}" +
    ".lks-bracket.tl{top:-1px;left:-1px;border-right:none;border-bottom:none}" +
    ".lks-bracket.tr{top:-1px;right:-1px;border-left:none;border-bottom:none}" +
    ".lks-bracket.bl{bottom:-1px;left:-1px;border-right:none;border-top:none}" +
    ".lks-bracket.br{bottom:-1px;right:-1px;border-left:none;border-top:none}" +
    ".lks-reticle{position:absolute;width:7px;height:7px;pointer-events:none;z-index:20}" +
    ".lks-reticle::before{content:'';position:absolute;top:3px;left:0;width:7px;height:1px;background-color:var(--text-muted)}" +
    ".lks-reticle::after{content:'';position:absolute;top:0;left:3px;width:1px;height:7px;background-color:var(--text-muted)}" +
    ".lks-reticle.tl{top:8px;left:8px}" +
    ".gate-window-head{height:38px;padding:0 10px;background:var(--card-bg);border-bottom:1px solid var(--border-color);background-image:var(--bg-mode);display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow-drop);position:relative}" +
    ".gate-brand{display:flex;align-items:center;gap:6px;font-size:0.75rem;font-weight:800;letter-spacing:0.12rem;color:var(--highlight-color);text-transform:uppercase;transition:color 0.3s ease}" +
    ".lks-vent--h{background:repeating-linear-gradient(90deg,var(--text-muted),var(--text-muted) 2px,transparent 2px,transparent 5px);height:4px;width:24px;opacity:0.45}" +
    ".gate-pill{font-size:8.5px;font-weight:800;letter-spacing:0.08em;color:var(--highlight-color);font-family:var(--font-code);text-transform:uppercase;padding:2px 4px;transition:color 0.3s ease}" +
    ".gate-close-btn{background:transparent;border:1px solid var(--border-color);color:var(--text-muted);cursor:pointer;font-family:var(--font-main);font-size:10px;padding:2px 6px;line-height:1;display:none;transition:all 0.2s ease}" +
    ".gate-close-btn:hover{color:var(--danger-color);border-color:var(--danger-color);background:var(--card-bg)}" +
    ".gate-window-body{padding:12px;display:flex;flex-direction:column;gap:10px;background:var(--bg-tertiary);box-shadow:var(--shadow-inset)}" +
    ".gate-status-panel{background:var(--panel-bg);border:1px solid var(--border-color);padding:8px 10px;display:flex;flex-direction:column;gap:5px;box-shadow:var(--shadow-inset);border-left:3px solid var(--highlight-color);transition:border-color 0.3s ease}" +
    ".gate-status-line{display:flex;align-items:center;justify-content:space-between;font-size:9px;font-family:var(--font-code);font-weight:700;color:var(--text-muted)}" +
    ".gate-status-msg{font-size:10px;font-weight:800;letter-spacing:0.06em;color:var(--text-color);display:flex;align-items:center;gap:6px}" +
    ".gate-status-msg strong{color:var(--highlight-color);transition:color 0.3s ease}" +
    ".gate-telemetry-block{background:var(--panel-bg);border:1px solid var(--border-color);padding:8px 10px;display:flex;flex-direction:column;gap:6px}" +
    ".telemetry-meta{display:flex;align-items:center;justify-content:space-between;font-size:8px;font-weight:700;letter-spacing:0.08em;color:var(--text-muted);text-transform:uppercase;font-family:var(--font-code)}" +
    ".telemetry-meta span:last-child{color:var(--highlight-color)}" +
    ".L{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:0.125rem;padding:0.125rem;background:var(--bg-secondary);border:1px solid var(--border-color);box-shadow:var(--shadow-inset);width:100%;max-width:180px}" +
    ".L .btn-bg{display:flex;align-items:center;justify-content:center;padding:1px;aspect-ratio:1/1;width:100%;min-width:0;background:var(--card-bg);border:1px solid var(--border-color) !important;box-shadow:var(--shadow-inset)}" +
    ".L .btn-bg b{display:block;width:100%;height:100%;background:var(--card-bg);border:1px solid var(--border-color);transition:background 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease}" +
    "@keyframes lks-node-pulse{0%,100%{background:var(--card-bg);border-color:var(--border-color);box-shadow:none;opacity:0.22}35%{background:var(--node-pulse-color,var(--highlight-color));border-color:var(--node-pulse-color,var(--highlight-color));box-shadow:0 0 6px var(--node-pulse-color,var(--highlight-color));opacity:1}65%{background:var(--hover-bg);border-color:var(--border-color-hover);box-shadow:0 0 2px rgba(255,255,255,0.12);opacity:0.55}}" +
    ".L .btn-bg:nth-child(3n+1) b{animation:lks-node-pulse 2.2s ease-in-out infinite -0.4s}" +
    ".L .btn-bg:nth-child(3n+2) b{animation:lks-node-pulse 1.8s ease-in-out infinite -1.1s}" +
    ".L .btn-bg:nth-child(3n+3) b{animation:lks-node-pulse 2.9s ease-in-out infinite -0.7s}" +
    ".L .btn-bg:nth-child(4n+1) b{animation-duration:2.5s;animation-delay:-1.5s}" +
    ".L .btn-bg:nth-child(5n+2) b{animation-duration:3.2s;animation-delay:-2.1s}" +
    ".L .btn-bg:nth-child(7n+3) b{animation-duration:1.9s;animation-delay:-0.9s}" +
    ".mode-standby{--node-pulse-color:var(--highlight-color)}" +
    ".mode-success{--node-pulse-color:var(--success-color);border-top-color:var(--success-color) !important}" +
    ".mode-success .lks-bracket{border-color:var(--success-color)}" +
    ".mode-success .gate-brand{color:var(--success-color)}" +
    ".mode-success .gate-pill{color:var(--success-color)}" +
    ".mode-success .gate-status-panel{border-left-color:var(--success-color)}" +
    ".mode-success .gate-status-msg strong{color:var(--success-color)}" +
    ".mode-success .telemetry-meta span:last-child{color:var(--success-color)}" +
    ".mode-success .progress-pct{color:var(--success-color)}" +
    ".mode-success .progress-fill{background:var(--success-color);box-shadow:0 0 6px var(--success-color)}" +
    ".mode-success .gate-led{background:var(--success-color);box-shadow:0 0 6px var(--success-color)}" +
    ".mode-error{--node-pulse-color:var(--danger-color);border-top-color:var(--danger-color) !important;border-color:rgba(220,53,69,0.5) !important}" +
    ".mode-error .lks-bracket{border-color:var(--danger-color)}" +
    ".mode-error .gate-brand{color:var(--danger-color)}" +
    ".mode-error .gate-pill{color:var(--danger-color)}" +
    ".mode-error .gate-status-panel{border-left-color:var(--danger-color)}" +
    ".mode-error .gate-status-msg strong{color:var(--danger-color)}" +
    ".mode-error .telemetry-meta span:last-child{color:var(--danger-color)}" +
    ".mode-error .progress-pct{color:var(--danger-color)}" +
    ".mode-error .progress-fill{background:var(--danger-color);width:100% !important;box-shadow:0 0 6px var(--danger-color)}" +
    ".mode-error .gate-led{background:var(--danger-color);box-shadow:0 0 6px var(--danger-color)}" +
    ".gate-field-group{display:flex;flex-direction:column;gap:4px}" +
    ".field-tag{font-size:8px;font-weight:700;color:var(--highlight-color);letter-spacing:0.08em;text-transform:uppercase}" +
    ".sha-stream-box{width:100%;padding:6px 8px;background:var(--bg-secondary);border:1px solid var(--border-color);font-family:var(--font-code);font-size:8.5px;color:var(--text-muted);display:flex;align-items:center;justify-content:space-between;overflow:hidden}" +
    ".sha-stream-box code{color:var(--highlight-color);font-weight:700}" +
    ".progress-section{display:flex;flex-direction:column;gap:3px}" +
    ".progress-labels{display:flex;justify-content:space-between;align-items:center;font-size:8.5px;font-family:var(--font-code);color:var(--text-muted);text-transform:uppercase}" +
    ".progress-pct{font-weight:700;color:var(--highlight-color);font-variant-numeric:tabular-nums}" +
    ".progress-track{height:4px;background:var(--bg-color);border:1px solid var(--border-color);box-shadow:var(--shadow-inset);overflow:hidden;width:100%}" +
    ".progress-fill{height:100%;width:0%;background:var(--highlight-color);transition:width 0.25s ease,background-color 0.3s ease}" +
    ".gate-window-foot{padding:8px 10px;background:var(--card-bg);border-top:1px solid var(--border-color);display:flex;align-items:center;justify-content:space-between;gap:8px}" +
    ".gate-foot-meta{font-size:8.5px;font-family:var(--font-code);color:var(--text-muted);display:flex;align-items:center;gap:6px}" +
    ".gate-led{width:6px;height:6px;background:var(--highlight-color);box-shadow:0 0 6px var(--highlight-color);display:inline-block}" +
    "#L-shield-badge{position:fixed;bottom:14px;right:14px;z-index:999999;display:none;align-items:center;gap:6px;background:var(--panel-bg);border:1px solid var(--border-color);border-top:2px solid var(--highlight-color);box-shadow:var(--shadow-drop);padding:4px 8px;cursor:pointer;font-family:var(--font-main);color:var(--text-color);transition:transform 0.2s ease,border-color 0.2s ease}" +
    "#L-shield-badge:hover{transform:translateY(-2px);border-color:var(--highlight-color)}" +
    "#L-shield-badge.badge-ok{border-top-color:var(--success-color)}" +
    "#L-shield-badge.badge-ok:hover{border-color:var(--success-color)}" +
    ".badge-icon{width:12px;height:12px;display:flex;align-items:center;justify-content:center;fill:currentColor}" +
    ".badge-label{font-size:9px;font-weight:800;letter-spacing:0.06em;font-family:var(--font-code);color:var(--text-color);text-transform:uppercase}" +
    ".badge-status{font-size:8px;font-weight:700;color:var(--highlight-color);padding:1px 4px;background:var(--card-bg);border:1px solid var(--border-color)}" +
    "#L-shield-badge.badge-ok .badge-status{color:var(--success-color)}" +
    ".badge-led{width:5px;height:5px;background:var(--highlight-color);box-shadow:0 0 5px var(--highlight-color);display:inline-block}" +
    "#L-shield-badge.badge-ok .badge-led{background:var(--success-color);box-shadow:0 0 5px var(--success-color)}";

  function sty() {
    if ($("Z")) return;
    var f = d.createElement("link");
    f.rel = "stylesheet";
    f.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Share+Tech+Mono&display=swap";
    (d.head || d.documentElement).appendChild(f);
    var s = d.createElement("style");
    s.id = "Z";
    s.textContent = css;
    (d.head || d.documentElement).appendChild(s);
  }

  function clearSess() {
    try {
      sessionStorage.removeItem(SK);
      sessionStorage.removeItem(SDK);
      localStorage.removeItem(SK);
      localStorage.removeItem(SDK);
    } catch (e) {}
  }

  function sessOk() {
    var t = new Date().toDateString(),
      x = sessionStorage.getItem(SK),
      y = sessionStorage.getItem(SDK);
    if (x === "VALID" && y !== t) {
      clearSess();
      return 0;
    }
    return x === "VALID" && y === t;
  }

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function updateNavStatus(state, label, status) {
    var n = $("lks-nav-status");
    if (!n) return;
    n.setAttribute("data-lks-state", state || "wait");
    var l = n.querySelector(".nav-pill__lks-label"),
      s = n.querySelector(".nav-pill__lks-status");
    if (l && label) l.textContent = label;
    if (s && status) s.textContent = status;
  }

  var clockId = 0;
  function startNavClock() {
    if (clockId) return;
    function tick() {
      var t = new Date(),
        dd = $("lks-nav-date"),
        tt = $("lks-nav-time"),
        gClock = $("gateClockTime");
      var timeStr =
        pad(t.getHours()) + ":" + pad(t.getMinutes()) + ":" + pad(t.getSeconds());
      if (dd) {
        dd.textContent =
          pad(t.getDate()) + "." + pad(t.getMonth() + 1) + "." + t.getFullYear();
      }
      if (tt) {
        tt.textContent = timeStr;
        tt.setAttribute("datetime", t.toISOString());
      }
      if (gClock) {
        gClock.textContent = timeStr;
      }
    }
    tick();
    clockId = setInterval(tick, 1000);
  }

  function setSt(msg, isOk) {
    var p = $("L1"),
      a = $("L2"),
      s = $("L3"),
      tag = $("L-tag"),
      foot = $("gateFootStatus"),
      speed = $("gateLinkSpeed"),
      badge = $("L-shield-badge"),
      badgeSt = $("L-badge-status");

    if (p) p.classList.remove("er");
    if (isOk) {
      if (p) {
        p.classList.remove("mode-standby", "mode-error", "er");
        p.classList.add("ok", "mode-success");
      }
      if (a) a.textContent = "LKS // AUTH";
      if (tag) tag.textContent = "AUTH_OK // PASSED";
      if (s) s.innerHTML = "STATUS: <strong>" + (msg || "ACCESS_GRANTED // SESSION_VALIDATED") + "</strong>";
      if (foot) foot.textContent = "SESSION: SYNCHRONIZED";
      if (speed) speed.textContent = "36-NODE SYNC COMPLETED";
      if (badge) badge.classList.add("badge-ok");
      if (badgeSt) badgeSt.textContent = "SEC_ACTIVE";
    } else if (s && msg) {
      s.innerHTML = "STATUS: <strong>" + msg + "</strong>";
    }
  }

  function hide() {
    var e = b();
    e.classList.add("lks-guard-passed");
    e.classList.remove("lks-page-loading");

    // Ukryj modal i pokaż tarczę w rogu
    var o = $("L0");
    if (o) o.classList.add("d");

    var closeBtn = $("L-close");
    if (closeBtn) closeBtn.style.display = "inline-block";

    var badge = $("L-shield-badge");
    if (badge) badge.style.display = "inline-flex";
  }

  function showModal() {
    var o = $("L0");
    if (o) o.classList.remove("d");
  }

  function redir(isSessionExpire) {
    clearSess();
    var o = $("L0"),
      p = $("L1"),
      a = $("L2"),
      s = $("L3"),
      tag = $("L-tag"),
      foot = $("gateFootStatus"),
      speed = $("gateLinkSpeed"),
      pct = $("L6"),
      badge = $("L-shield-badge"),
      badgeSt = $("L-badge-status");

    if (badge) badge.style.display = "none";

    if (o) {
      b().classList.remove("lks-guard-passed");
      b().classList.add("lks-page-loading");
      o.classList.remove("d");
    }
    updateNavStatus("stop", "STOP", isSessionExpire ? "SESJA" : "BRAK");
    if (p) {
      p.classList.remove("ok", "mode-success", "mode-standby");
      p.classList.add("er", "mode-error");
    }
    if (a) a.textContent = "STOP // DENIED";
    if (tag) tag.textContent = "LOCKOUT // HALT";
    if (s) s.innerHTML = "STATUS: <strong>" + (isSessionExpire ? "SESSION_EXPIRED" : "UNAUTHORIZED // CHECKSUM_MISMATCH") + "</strong>";
    if (foot) foot.textContent = "SECURITY_HALT: REDIRECTING...";
    if (speed) speed.textContent = "36-NODE LINK HALTED";
    if (pct) pct.textContent = "HALT";

    var g = H || location.origin + "/",
      u = location.origin + location.pathname;
    setTimeout(function () {
      var sep = g.indexOf("?") >= 0 ? "&" : "?";
      location.replace(g + sep + "return_url=" + encodeURIComponent(u));
    }, 1200);
  }

  var watchId = 0;
  function watch() {
    if (watchId) return;
    function k() {
      if (!d.hidden && !sessOk()) redir(1);
      checkHubSession();
    }
    watchId = setInterval(k, 1500);
    d.addEventListener("visibilitychange", function () {
      if (!d.hidden) k();
    });
  }

  function go() {
    setSt("", 1);
    var bar = $("L5"),
      pct = $("L6"),
      done = 0;

    function finish() {
      if (done) return;
      done = 1;
      if (pct) pct.textContent = "100%";
      if (bar) bar.style.width = "100%";
      setTimeout(function () {
        hide();
        updateNavStatus("ok", "OK", "SESJA");
        startNavClock();
        watch();
      }, 400);
    }

    function showProgress(start) {
      var elapsed = Math.min((performance.now() - start) / 2400, 1),
        value;
      if (elapsed < 0.25) value = elapsed * 100;
      else if (elapsed < 0.31) value = 25;
      else if (elapsed < 0.65) value = 25 + ((elapsed - 0.31) / 0.34) * 40;
      else if (elapsed < 0.8) value = 65;
      else value = 65 + ((elapsed - 0.8) / 0.2) * 35;

      var currentPct = Math.min(100, Math.round(value));
      if (pct) pct.textContent = currentPct + "%";
      if (bar) bar.style.width = currentPct + "%";

      if (!done && elapsed < 1) {
        requestAnimationFrame(function () {
          showProgress(start);
        });
      } else {
        finish();
      }
    }

    showProgress(performance.now());
  }

  var textEncoder = window.TextEncoder ? new TextEncoder() : null;
  async function sha256(t) {
    if (!t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if (window.crypto && crypto.subtle && crypto.subtle.digest && textEncoder) {
      var buf = await crypto.subtle.digest("SHA-256", textEncoder.encode(t));
      var arr = new Uint8Array(buf),
        hex = "";
      for (var i = 0; i < arr.length; i++) {
        var h = arr[i].toString(16);
        hex += (h.length === 1 ? "0" : "") + h;
      }
      return hex;
    }
    return "";
  }

  function checkHubSession() {
    if (window.opener && !window.opener.closed) {
      try {
        window.opener.postMessage({ type: "LKS_SESSION_CHECK" }, "*");
      } catch (e) {}
    }
  }

  window.addEventListener("message", function (e) {
    if (!e.data || typeof e.data !== "object") return;
    if (
      e.data.type === "LKS_GUARD_LOGOUT" ||
      (e.data.type === "LKS_SESSION_STATUS" && e.data.valid === false)
    ) {
      clearSess();
      redir(1);
    }
  });

  window.addEventListener("storage", function (e) {
    if (
      (e.key === SK && e.newValue !== "VALID") ||
      e.key === "lks_vault_logout_signal"
    ) {
      clearSess();
      redir(1);
    }
  });

  try {
    var bc = new BroadcastChannel("lks_channel");
    bc.onmessage = function (e) {
      if (
        e.data &&
        (e.data.type === "LKS_GUARD_LOGOUT" || e.data.valid === false)
      ) {
        clearSess();
        redir(1);
      }
    };
  } catch (e) {}

  if (window.opener && !window.opener.closed) {
    try {
      window.opener.postMessage({ type: "LKS_REGISTER_CLIENT" }, "*");
    } catch (e) {}
  }

  window.addEventListener("focus", checkHubSession);

  async function run() {
    var q = new URLSearchParams(location.search);
    if (q.get("lks_logout") === "1") {
      clearSess();
      history.replaceState({}, d.title, location.origin + location.pathname);
      location.replace(H || location.origin + "/");
      return;
    }

    var n = q.get("auth");
    var day = new Date().getDate();

    if (n) {
      for (var i = 0; i < ALLOWED_HASHES.length; i++) {
        var exp = await sha256(ALLOWED_HASHES[i] + "_" + day);
        if (n.toLowerCase() === exp.toLowerCase()) {
          sessionStorage.setItem(SK, "VALID");
          sessionStorage.setItem(SDK, new Date().toDateString());
          history.replaceState({}, d.title, location.origin + location.pathname);
          go();
          checkHubSession();
          return;
        }
      }
      clearSess();
      redir(0);
      return;
    }

    if (window.opener && !window.opener.closed) {
      checkHubSession();
      if (sessOk()) {
        go();
        return;
      }
      redir(0);
      return;
    }

    if (sessOk()) {
      go();
      return;
    }

    clearSess();
    redir(0);
  }

  function mount() {
    try {
      build();
    } catch (e) {
      hide();
      throw e;
    }
  }

  function build() {
    sty();
    var e = b();
    e.classList.add("lks-page-loading");

    // 1. Modal okna weryfikacji
    var o = d.createElement("div");
    o.id = "L0";

    var nodesHtml = new Array(36).fill('<div class="btn-bg"><b></b></div>').join("");
    var day = new Date().getDate();

    o.innerHTML =
      '<div id="L1" class="mode-standby">' +
      '  <div class="lks-bracket tl"></div>' +
      '  <div class="lks-bracket tr"></div>' +
      '  <div class="lks-bracket bl"></div>' +
      '  <div class="lks-bracket br"></div>' +
      '  <div class="lks-reticle tl"></div>' +
      '  <div class="gate-window-head">' +
      '    <p id="L2" class="gate-brand">LKS // GUARD</p>' +
      '    <div class="lks-vent--h"></div>' +
      '    <div style="display:flex;align-items:center;gap:6px;">' +
      '      <span id="L-tag" class="gate-pill">STANDBY // VERIFY</span>' +
      '      <button id="L-close" class="gate-close-btn" type="button" title="Ukryj okno">✕</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="gate-window-body">' +
      '    <div class="gate-status-panel">' +
      '      <div class="gate-status-line">' +
      '        <span>POLICY: SHA-256</span>' +
      '        <span id="gateClockTime">--:--:--</span>' +
      '      </div>' +
      '      <p id="L3" class="gate-status-msg">STATUS: <strong>CHALLENGE_ACTIVE // VERIFYING...</strong></p>' +
      '    </div>' +
      '    <div class="gate-telemetry-block">' +
      '      <div class="telemetry-meta">' +
      '        <span>3x12 MATRIX</span>' +
      '        <span id="gateLinkSpeed">36-NODE CARRIER ACTIVE</span>' +
      '      </div>' +
      '      <div class="L">' +
      nodesHtml +
      '      </div>' +
      '    </div>' +
      '    <div class="gate-field-group">' +
      '      <div class="field-tag">' +
      '        <span>HASH VECTOR (SHA-256 + DAY SALT)</span>' +
      '      </div>' +
      '      <div class="sha-stream-box">' +
      '        <span>SIG:</span>' +
      '        <code>3cdf2dab...fe18fb4d</code>' +
      '        <span style="font-size:8px;opacity:0.6;">D-SALT: <b>' + day + '</b></span>' +
      '      </div>' +
      '    </div>' +
      '    <div class="progress-section">' +
      '      <div class="progress-labels">' +
      '        <span>AUTH_PROGRESSION</span>' +
      '        <span id="L6" class="progress-pct">0%</span>' +
      '      </div>' +
      '      <div class="progress-track">' +
      '        <div id="L5" class="progress-fill"></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="gate-window-foot">' +
      '    <div class="gate-foot-meta">' +
      '      <span class="gate-led"></span>' +
      '      <span id="gateFootStatus">SEC_POLICY: SHA-256_ACTIVE</span>' +
      '    </div>' +
      '    <span style="font-size:8px;font-family:var(--font-code);color:var(--text-muted);padding:2px 4px;">CORE_V4.6</span>' +
      '  </div>' +
      '</div>';

    // 2. Mała tarcza w prawym dolnym rogu
    var badge = d.createElement("div");
    badge.id = "L-shield-badge";
    badge.title = "LKS Guard: Kliknij, aby otworzyć panel weryfikacji";
    badge.innerHTML =
      '<svg class="badge-icon" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 17.9c-3.7-1.1-6.8-4.8-6.9-8.9V8.4l6.9-3.8 6.9 3.8v2.6c-.1 4.1-3.2 7.8-6.9 8.9z"/></svg>' +
      '<span class="badge-label">LKS</span>' +
      '<span class="badge-led"></span>' +
      '<span id="L-badge-status" class="badge-status">VALID</span>';

    badge.addEventListener("click", showModal);

    e.appendChild(o);
    e.appendChild(badge);

    var closeBtn = $("L-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        o.classList.add("d");
      });
    }

    startNavClock();
    run();
  }

  C.sessOk = sessOk;
  C.updateNavStatus = updateNavStatus;
  C.startNavClock = startNavClock;

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
