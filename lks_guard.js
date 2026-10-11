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
    for (var T = d.getElementsByTagName("script"), i = T.length; i--; ) {
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
    "*,*::before,*::after{box-sizing:border-box;border-radius:0 !important;margin:0;padding:0;user-select:none;outline:none}" +
    "body{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:var(--bg-color);color:var(--text-color);font-family:var(--font-main);background-image:linear-gradient(135deg,rgba(243,108,0,0.07) 0%,transparent 45%,rgba(243,108,0,0.03) 100%),var(--bg-grid),var(--bg-img);background-size:auto,var(--bg-grid-size),cover;background-position:center;background-repeat:no-repeat,repeat,no-repeat;background-attachment:fixed;padding:16px;position:relative}" +
    ".btn-bg{display:inline-flex;justify-content:center;align-items:center;box-shadow:var(--shadow-inset);padding:var(--padding);gap:var(--gap);position:relative;overflow:hidden;width:fit-content;border:1px solid var(--border-color) !important;margin:0;background:var(--card-bg);box-sizing:border-box;transition:border-color 0.2s ease,background 0.2s ease}" +
    ".btn-bg:hover{border-color:var(--border-color-hover)}" +
    ".btn-bg.btn-bg-full{width:100%;display:flex}" +
    ".btn-bg.btn-bg-compact{padding:0.125rem}" +
    ".btn-bg button{background:var(--bg-tertiary);border:1px solid var(--border-color);box-shadow:var(--shadow-drop);color:var(--text-color);font-family:var(--font-main);font-size:10px;font-weight:700;text-transform:uppercase;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:6px 12px;width:100%;transition:all 0.2s ease}" +
    ".btn-bg button:hover{color:var(--highlight-color);background:var(--hover-bg);border-color:var(--highlight-color)}" +
    ".btn-bg button:active{background:var(--bg-color)}" +
    ".btn-bg button.active-state{background:var(--card-bg);color:var(--highlight-color);border-color:var(--highlight-color);box-shadow:inset 0 -2px 0 var(--highlight-color)}" +
    ".lks-icon{width:14px;height:14px;stroke-width:2}" +
    ".guard-stage{width:100%;max-width:520px;display:flex;flex-direction:column;gap:12px;position:relative;z-index:10}" +
    ".stage-switcher{display:flex;align-items:center;justify-content:space-between;gap:8px;background:var(--panel-bg);border:1px solid var(--border-color);border-top:2px solid var(--highlight-color);padding:6px 10px;box-shadow:var(--shadow-drop)}" +
    ".switcher-label{font-size:9px;font-weight:800;letter-spacing:0.1em;color:var(--highlight-color);text-transform:uppercase;display:flex;align-items:center;gap:6px}" +
    ".switcher-buttons{display:flex;gap:4px}" +
    ".lks-gate-window{position:relative;width:100%;background:var(--panel-bg);border:1px solid var(--border-color);border-top:3px solid var(--highlight-color);box-shadow:var(--shadow-drop);display:flex;flex-direction:column;transition:border-color 0.3s ease}" +
    ".lks-bracket{position:absolute;width:14px;height:14px;border:2px solid var(--highlight-color);pointer-events:none;z-index:20;transition:border-color 0.3s ease}" +
    ".lks-bracket.tl{top:-1px;left:-1px;border-right:none;border-bottom:none}" +
    ".lks-bracket.tr{top:-1px;right:-1px;border-left:none;border-bottom:none}" +
    ".lks-bracket.bl{bottom:-1px;left:-1px;border-right:none;border-top:none}" +
    ".lks-bracket.br{bottom:-1px;right:-1px;border-left:none;border-top:none}" +
    ".lks-reticle{position:absolute;width:7px;height:7px;pointer-events:none;z-index:20}" +
    ".lks-reticle::before{content:'';position:absolute;top:3px;left:0;width:7px;height:1px;background-color:var(--text-muted)}" +
    ".lks-reticle::after{content:'';position:absolute;top:0;left:3px;width:1px;height:7px;background-color:var(--text-muted)}" +
    ".lks-reticle.tl{top:8px;left:8px}" +
    ".lks-reticle.tr{top:8px;right:8px}" +
    ".lks-reticle.bl{bottom:8px;left:8px}" +
    ".lks-reticle.br{bottom:8px;right:8px}" +
    ".gate-window-head{height:42px;padding:0 14px;background:var(--card-bg);border-bottom:1px solid var(--border-color);background-image:var(--bg-mode);display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow-drop);position:relative}" +
    ".gate-brand{display:flex;align-items:center;gap:8px;font-size:0.82rem;font-weight:800;letter-spacing:0.18rem;color:var(--highlight-color);text-transform:uppercase;transition:color 0.3s ease}" +
    ".lks-vent--h{background:repeating-linear-gradient(90deg,var(--text-muted),var(--text-muted) 2px,transparent 2px,transparent 5px);height:4px;width:28px;opacity:0.45}" +
    ".gate-pill{font-size:9px;font-weight:800;letter-spacing:0.08em;color:var(--highlight-color);font-family:var(--font-code);text-transform:uppercase;padding:2px 6px;transition:color 0.3s ease}" +
    ".gate-window-body{padding:16px;display:flex;flex-direction:column;gap:12px;background:var(--bg-tertiary);box-shadow:var(--shadow-inset)}" +
    ".gate-status-panel{background:var(--panel-bg);border:1px solid var(--border-color);padding:10px 12px;display:flex;flex-direction:column;gap:6px;box-shadow:var(--shadow-inset);border-left:3px solid var(--highlight-color);transition:border-color 0.3s ease}" +
    ".gate-status-line{display:flex;align-items:center;justify-content:space-between;font-size:9.5px;font-family:var(--font-code);font-weight:700;color:var(--text-muted)}" +
    ".gate-status-msg{font-size:11px;font-weight:800;letter-spacing:0.08em;color:var(--text-color);display:flex;align-items:center;gap:8px}" +
    ".gate-status-msg strong{color:var(--highlight-color);transition:color 0.3s ease}" +
    ".gate-telemetry-block{background:var(--panel-bg);border:1px solid var(--border-color);padding:10px 12px;display:flex;flex-direction:column;gap:8px}" +
    ".telemetry-meta{display:flex;align-items:center;justify-content:space-between;font-size:8.5px;font-weight:700;letter-spacing:0.1em;color:var(--text-muted);text-transform:uppercase;font-family:var(--font-code)}" +
    ".telemetry-meta span:last-child{color:var(--highlight-color)}" +
    ".L{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:0.125rem;padding:0.125rem;background:var(--bg-secondary);border:1px solid var(--border-color);box-shadow:var(--shadow-inset);box-sizing:border-box;width:100%;max-width:200px}" +
    ".L .btn-bg{display:flex;align-items:center;justify-content:center;padding:1.5px;margin:0;aspect-ratio:1 / 1;width:100%;min-width:0;background:var(--card-bg);border:1px solid var(--border-color);box-shadow:var(--shadow-inset);box-sizing:border-box;transition:border-color 0.2s ease,transform 0.15s ease}" +
    ".L .btn-bg:hover{border-color:var(--border-color-hover);transform:translateY(-1px)}" +
    ".L .btn-bg b{display:block;width:100%;height:100%;background:var(--card-bg);border:1px solid var(--border-color);border-radius:0 !important;transition:background 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease}" +
    "@keyframes lks-node-pulse{0%,100%{background:var(--card-bg);border-color:var(--border-color);box-shadow:none;opacity:0.22}35%{background:var(--node-pulse-color,var(--highlight-color));border-color:var(--node-pulse-color,var(--highlight-color));box-shadow:0 0 7px var(--node-pulse-color,var(--highlight-color));opacity:1}65%{background:var(--hover-bg);border-color:var(--border-color-hover);box-shadow:0 0 3px rgba(255,255,255,0.12);opacity:0.55}}" +
    ".L .btn-bg:nth-child(1) b{animation:lks-node-pulse 2.45s ease-in-out infinite -0.40s}" +
    ".L .btn-bg:nth-child(2) b{animation:lks-node-pulse 1.85s ease-in-out infinite -1.20s}" +
    ".L .btn-bg:nth-child(3) b{animation:lks-node-pulse 3.10s ease-in-out infinite -0.70s}" +
    ".L .btn-bg:nth-child(4) b{animation:lks-node-pulse 2.15s ease-in-out infinite -1.80s}" +
    ".L .btn-bg:nth-child(5) b{animation:lks-node-pulse 3.45s ease-in-out infinite -2.30s}" +
    ".L .btn-bg:nth-child(6) b{animation:lks-node-pulse 1.95s ease-in-out infinite -0.40s}" +
    ".L .btn-bg:nth-child(7) b{animation:lks-node-pulse 2.70s ease-in-out infinite -1.55s}" +
    ".L .btn-bg:nth-child(8) b{animation:lks-node-pulse 2.30s ease-in-out infinite -0.90s}" +
    ".L .btn-bg:nth-child(9) b{animation:lks-node-pulse 3.60s ease-in-out infinite -2.80s}" +
    ".L .btn-bg:nth-child(10) b{animation:lks-node-pulse 2.05s ease-in-out infinite -1.10s}" +
    ".L .btn-bg:nth-child(11) b{animation:lks-node-pulse 2.90s ease-in-out infinite -0.30s}" +
    ".L .btn-bg:nth-child(12) b{animation:lks-node-pulse 1.75s ease-in-out infinite -1.40s}" +
    ".L .btn-bg:nth-child(13) b{animation:lks-node-pulse 3.25s ease-in-out infinite -2.10s}" +
    ".L .btn-bg:nth-child(14) b{animation:lks-node-pulse 2.40s ease-in-out infinite -0.80s}" +
    ".L .btn-bg:nth-child(15) b{animation:lks-node-pulse 1.90s ease-in-out infinite -1.60s}" +
    ".L .btn-bg:nth-child(16) b{animation:lks-node-pulse 3.80s ease-in-out infinite -2.50s}" +
    ".L .btn-bg:nth-child(17) b{animation:lks-node-pulse 2.60s ease-in-out infinite -0.50s}" +
    ".L .btn-bg:nth-child(18) b{animation:lks-node-pulse 2.10s ease-in-out infinite -1.90s}" +
    ".L .btn-bg:nth-child(19) b{animation:lks-node-pulse 3.35s ease-in-out infinite -1.30s}" +
    ".L .btn-bg:nth-child(20) b{animation:lks-node-pulse 1.80s ease-in-out infinite -0.20s}" +
    ".L .btn-bg:nth-child(21) b{animation:lks-node-pulse 2.75s ease-in-out infinite -2.70s}" +
    ".L .btn-bg:nth-child(22) b{animation:lks-node-pulse 3.50s ease-in-out infinite -0.60s}" +
    ".L .btn-bg:nth-child(23) b{animation:lks-node-pulse 2.20s ease-in-out infinite -1.70s}" +
    ".L .btn-bg:nth-child(24) b{animation:lks-node-pulse 1.95s ease-in-out infinite -3.10s}" +
    ".L .btn-bg:nth-child(25) b{animation:lks-node-pulse 3.05s ease-in-out infinite -0.90s}" +
    ".L .btn-bg:nth-child(26) b{animation:lks-node-pulse 2.50s ease-in-out infinite -2.20s}" +
    ".L .btn-bg:nth-child(27) b{animation:lks-node-pulse 1.85s ease-in-out infinite -1.00s}" +
    ".L .btn-bg:nth-child(28) b{animation:lks-node-pulse 3.70s ease-in-out infinite -3.40s}" +
    ".L .btn-bg:nth-child(29) b{animation:lks-node-pulse 2.35s ease-in-out infinite -0.70s}" +
    ".L .btn-bg:nth-child(30) b{animation:lks-node-pulse 2.00s ease-in-out infinite -1.50s}" +
    ".L .btn-bg:nth-child(31) b{animation:lks-node-pulse 3.15s ease-in-out infinite -2.90s}" +
    ".L .btn-bg:nth-child(32) b{animation:lks-node-pulse 2.80s ease-in-out infinite -0.40s}" +
    ".L .btn-bg:nth-child(33) b{animation:lks-node-pulse 1.70s ease-in-out infinite -1.80s}" +
    ".L .btn-bg:nth-child(34) b{animation:lks-node-pulse 3.40s ease-in-out infinite -2.40s}" +
    ".L .btn-bg:nth-child(35) b{animation:lks-node-pulse 2.25s ease-in-out infinite -1.10s}" +
    ".L .btn-bg:nth-child(36) b{animation:lks-node-pulse 2.95s ease-in-out infinite -3.20s}" +
    ".mode-standby{--node-pulse-color:var(--highlight-color)}" +
    ".mode-standby .L .btn-bg{border-color:var(--border-color)}" +
    ".tempo-slow .L .btn-bg b{animation-duration:4.8s !important}" +
    ".tempo-stepped .L .btn-bg b{animation-timing-function:steps(3,end) !important}" +
    ".mode-success{--node-pulse-color:var(--success-color);border-top-color:var(--success-color)}" +
    ".mode-success .lks-bracket{border-color:var(--success-color)}" +
    ".mode-success .gate-brand{color:var(--success-color)}" +
    ".mode-success .gate-pill{color:var(--success-color)}" +
    ".mode-success .gate-status-panel{border-left-color:var(--success-color)}" +
    ".mode-success .gate-status-msg strong{color:var(--success-color)}" +
    ".mode-success .telemetry-meta span:last-child{color:var(--success-color)}" +
    ".mode-success .progress-pct{color:var(--success-color)}" +
    ".mode-success .progress-fill{background:var(--success-color);box-shadow:0 0 8px var(--success-color)}" +
    ".mode-success .L .btn-bg{border-color:rgba(40,167,69,0.4)}" +
    ".mode-error{--node-pulse-color:var(--danger-color);border-top-color:var(--danger-color);border-color:rgba(220,53,69,0.5)}" +
    ".mode-error .lks-bracket{border-color:var(--danger-color)}" +
    ".mode-error .gate-brand{color:var(--danger-color)}" +
    ".mode-error .gate-pill{color:var(--danger-color)}" +
    ".mode-error .gate-status-panel{border-left-color:var(--danger-color)}" +
    ".mode-error .gate-status-msg strong{color:var(--danger-color)}" +
    ".mode-error .telemetry-meta span:last-child{color:var(--danger-color)}" +
    ".mode-error .progress-pct{color:var(--danger-color)}" +
    ".mode-error .progress-fill{background:var(--danger-color);width:100% !important;box-shadow:0 0 8px var(--danger-color)}" +
    ".mode-error .L .btn-bg{border-color:rgba(220,53,69,0.4)}" +
    ".gate-field-group{display:flex;flex-direction:column;gap:6px}" +
    ".field-tag{font-size:8.5px;font-weight:700;color:var(--highlight-color);letter-spacing:0.08em;text-transform:uppercase;display:flex;align-items:center;gap:4px}" +
    ".sha-stream-box{width:100%;padding:10px;background:var(--bg-secondary);border:1px solid var(--border-color);font-family:var(--font-code);font-size:9.5px;color:var(--text-muted);display:flex;align-items:center;justify-content:space-between;overflow:hidden}" +
    ".sha-stream-box code{color:var(--highlight-color);font-weight:700;letter-spacing:0.05em}" +
    ".progress-section{display:flex;flex-direction:column;gap:4px}" +
    ".progress-labels{display:flex;justify-content:space-between;align-items:center;font-size:9px;font-family:var(--font-code);color:var(--text-muted);text-transform:uppercase}" +
    ".progress-pct{font-weight:700;color:var(--highlight-color);font-variant-numeric:tabular-nums}" +
    ".progress-track{height:5px;background:var(--bg-color);border:1px solid var(--border-color);box-shadow:var(--shadow-inset);overflow:hidden;width:100%}" +
    ".progress-fill{height:100%;width:45%;background:var(--highlight-color);transition:width 0.25s ease,background-color 0.3s ease}" +
    ".gate-window-foot{padding:10px 14px;background:var(--card-bg);border-top:1px solid var(--border-color);display:flex;align-items:center;justify-content:space-between;gap:10px}" +
    ".gate-foot-meta{font-size:9px;font-family:var(--font-code);color:var(--text-muted);display:flex;align-items:center;gap:8px}" +
    ".gate-led{width:6px;height:6px;background:var(--highlight-color);box-shadow:0 0 6px var(--highlight-color);display:inline-block}" +
    ".mode-success .gate-led{background:var(--success-color);box-shadow:0 0 6px var(--success-color)}" +
    ".mode-error .gate-led{background:var(--danger-color);box-shadow:0 0 6px var(--danger-color)}" +
    ".gate-interactive-panel{background:var(--panel-bg);border:1px solid var(--border-color);box-shadow:var(--shadow-drop);padding:10px 12px;display:flex;flex-direction:column;gap:8px}" +
    ".interactive-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}" +
    "@media (max-width:480px){.interactive-row{grid-template-columns:1fr}}";

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
    var x = sessionStorage.getItem(SK);
    if (x !== "VALID") return 0;
    var y = sessionStorage.getItem(SDK);
    var t = new Date().toDateString();
    if (y !== t) {
      clearSess();
      return 0;
    }
    return 1;
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
      var timeStr = pad(t.getHours()) + ":" + pad(t.getMinutes()) + ":" + pad(t.getSeconds());
      if (dd) {
        dd.textContent = pad(t.getDate()) + "." + pad(t.getMonth() + 1) + "." + t.getFullYear();
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
      speed = $("gateLinkSpeed");
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
    } else if (s && msg) {
      s.innerHTML = "STATUS: <strong>" + msg + "</strong>";
    }
  }

  function hide() {
    var e = b();
    e.classList.add("lks-guard-passed");
    e.classList.remove("lks-page-loading");
    var o = $("L0");
    if (o) o.classList.add("d");
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
      pct = $("L6");
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
      hide();
      updateNavStatus("ok", "OK", "SESJA");
      startNavClock();
      watch();
    }

    function showProgress(start) {
      var elapsed = Math.min((performance.now() - start) / 2650, 1),
        value;
      if (elapsed < 0.25) value = elapsed * 100;
      else if (elapsed < 0.31) value = 25;
      else if (elapsed < 0.65) value = 25 + ((elapsed - 0.31) / 0.34) * 40;
      else if (elapsed < 0.8) value = 65;
      else value = 65 + ((elapsed - 0.8) / 0.2) * 35;
      if (pct) pct.textContent = Math.min(100, Math.round(value)) + "%";
      if (!done && elapsed < 1) {
        requestAnimationFrame(function () {
          showProgress(start);
        });
      }
    }

    showProgress(performance.now());
    if (bar) bar.addEventListener("animationend", finish, { once: true });
    setTimeout(finish, bar ? 3200 : 0);
  }

  var textEncoder = window.TextEncoder ? new TextEncoder() : null;
  async function sha256(t) {
    if (!t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if (window.crypto && crypto.subtle && crypto.subtle.digest && textEncoder) {
      var buf = await crypto.subtle.digest("SHA-256", textEncoder.encode(t));
      var arr = new Uint8Array(buf), hex = "";
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
      '    <p id="L2">LKS // GUARD</p>' +
      '    <div class="lks-vent--h"></div>' +
      '    <span id="L-tag">STANDBY // VERIFY</span>' +
      '  </div>' +
      '  <div class="gate-window-body">' +
      '    <div class="gate-status-panel">' +
      '      <div class="gate-status-line">' +
      '        <span>SYSTEM_POLICY: SHA-256</span>' +
      '        <span id="gateClockTime">--:--:--</span>' +
      '      </div>' +
      '      <p id="L3">STATUS: <strong>CHALLENGE_ACTIVE // VERIFYING...</strong></p>' +
      '    </div>' +
      '    <div class="gate-telemetry-block">' +
      '      <div class="telemetry-meta">' +
      '        <span>3x12 TELEMETRY MATRIX</span>' +
      '        <span id="gateLinkSpeed">36-NODE CARRIER ACTIVE</span>' +
      '      </div>' +
      '      <div class="L">' +
      nodesHtml +
      '      </div>' +
      '    </div>' +
      '    <div class="gate-field-group">' +
      '      <div class="field-tag">' +
      '        <span>HASH VECTOR FEED (SHA-256 + DAY SALT)</span>' +
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
      '        <span id="L6">0%</span>' +
      '      </div>' +
      '      <div id="L4">' +
      '        <div id="L5"></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="gate-window-foot">' +
      '    <div class="gate-foot-meta">' +
      '      <span class="gate-led"></span>' +
      '      <span id="gateFootStatus">SEC_POLICY: SHA-256_ACTIVE</span>' +
      '    </div>' +
      '    <span style="font-size:8.5px;font-family:var(--font-code);color:var(--text-muted);padding:2px 6px;">CORE_V4.6</span>' +
      '  </div>' +
      '</div>';

    e.appendChild(o);
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
