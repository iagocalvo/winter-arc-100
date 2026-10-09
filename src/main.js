:root {
  --bg: #070b10;
  --panel: #0d141c;
  --panel2: #111b25;
  --line: #1d2d3d;
  --fg: #e8f4fb;
  --muted: #6b8699;
  --ice: #7fd3ff;
  --ice2: #3aa6e0;
  --blood: #b3263d;
  --blood2: #6e1422;
  --hoy: #ffffff;
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--fg);
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  background:
    radial-gradient(900px 500px at 50% -10%, rgba(127, 211, 255, 0.18), transparent 60%),
    radial-gradient(600px 400px at 100% 110%, rgba(58, 166, 224, 0.1), transparent 60%),
    var(--bg);
  padding: env(safe-area-inset-top, 0) 16px env(safe-area-inset-bottom, 0);
}

main {
  max-width: 660px;
  margin: 0 auto;
  padding: 18px 0 48px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand {
  font-size: 0.72rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ice);
}

.snow {
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}

.install-btn {
  border: 1px solid var(--line);
  background: rgba(127, 211, 255, 0.08);
  color: var(--fg);
  border-radius: 999px;
  padding: 8px 12px;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
}

h1 {
  font-size: 2.1rem;
  line-height: 1;
  margin: 8px 0 6px;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

h1 span {
  background: linear-gradient(90deg, #ffffff, var(--ice));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sub {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0 0 18px;
  line-height: 1.5;
}

.card {
  background: linear-gradient(180deg, var(--panel2), var(--panel));
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
  box-shadow: 0 0 0 1px rgba(127, 211, 255, 0.03) inset, 0 12px 40px rgba(0, 0, 0, 0.45);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
}

.stats b {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--fg);
  font-variant-numeric: tabular-nums;
}

.stats span {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

.bar {
  height: 8px;
  background: #0a1118;
  border: 1px solid var(--line);
  border-radius: 99px;
  overflow: hidden;
  margin-top: 14px;
}

.bar i {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--ice2), var(--ice));
  box-shadow: 0 0 14px rgba(127, 211, 255, 0.6);
  transition: width 0.6s ease;
}

.leyenda {
  font-size: 0.78rem;
  color: var(--muted);
  margin: 10px 0 0;
  line-height: 1.5;
}

.frase {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.55;
  margin: 0;
  color: var(--fg);
}

.autor {
  color: var(--ice);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  margin-top: 10px;
  text-transform: uppercase;
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
}

.d {
  aspect-ratio: 1;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(9, 16, 22, 0.7);
  color: #4d6578;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: transform 0.12s ease;
}

.d:active {
  transform: scale(0.94);
}

.d.ok {
  background: linear-gradient(160deg, var(--ice), var(--ice2));
  color: #03131e;
  border-color: transparent;
  box-shadow: 0 0 12px rgba(127, 211, 255, 0.35);
}

.d.bad {
  background: linear-gradient(160deg, var(--blood), var(--blood2));
  color: #fff;
  border-color: transparent;
}

.d.hoy {
  outline: 2px solid var(--hoy);
  outline-offset: 2px;
  color: var(--fg);
}

.d.fut {
  opacity: 0.22;
  cursor: default;
}

.d.extra {
  border-style: dashed;
  border-color: #2a4558;
}

.d:disabled {
  cursor: default;
}

label {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin: 14px 0 6px;
}

select,
textarea {
  width: 100%;
  font: inherit;
  font-size: 0.95rem;
  padding: 11px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #050a0f;
  color: var(--fg);
}

select:focus,
textarea:focus {
  outline: none;
  border-color: var(--ice2);
}

textarea {
  min-height: 76px;
  resize: vertical;
}

.btns {
  display: flex;
  gap: 8px;
  margin-top: 14px;
  flex-wrap: wrap;
}

button.b {
  font: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 11px 16px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  color: #03131e;
  background: var(--ice);
}

button.ok {
  background: linear-gradient(160deg, var(--ice), var(--ice2));
  color: #03131e;
}

button.bad {
  background: linear-gradient(160deg, var(--blood), var(--blood2));
  color: #fff;
}

button.sec {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--line);
}

#pan-fecha {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ice);
}

.reglas {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 8px 0 0;
  padding-left: 18px;
  color: #b9cddb;
}

.reglas li {
  margin-bottom: 4px;
}

.card > strong {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--ice);
}

.nota {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.5;
  text-align: center;
  margin-top: 18px;
}

@media (max-width: 420px) {
  .top {
    align-items: flex-start;
    flex-direction: column;
  }

  .top-actions {
    width: 100%;
    justify-content: space-between;
  }
}
