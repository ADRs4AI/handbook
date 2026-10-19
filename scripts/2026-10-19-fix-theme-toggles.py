# 2026-10-19 — Pharos 5: fix the day/night toggle across étude pages (It-6 catch:
# toggleAttribute||setAttribute could enter night but never leave; and the attr's
# empty value never matched [data-theme=night] on first click).
import pathlib
OLD = "onclick=\"document.documentElement.toggleAttribute('data-theme')||document.documentElement.setAttribute('data-theme','night')\""
NEW = "onclick=\"var h=document.documentElement;h.getAttribute('data-theme')==='night'?h.removeAttribute('data-theme'):h.setAttribute('data-theme','night')\""
for f in ['iron-gall.html','galley.html','marginalia.html','round2.html']:
    p = pathlib.Path('public/etude')/f
    s = p.read_text()
    n = s.count(OLD)
    s = s.replace(OLD, NEW)
    p.write_text(s)
    print(f, 'toggles fixed:', n)
# OUTCOME (2026-10-19): ran clean — iron-gall 1, galley 1, marginalia 1, round2 1.
