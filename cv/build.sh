#!/usr/bin/env bash
# Regenera los PDF del CV (public/cv/) a partir de cv/cv-es.html y cv/cv-en.html.
# Usa el Chromium de Playwright si está, si no el Chrome/Chromium del sistema.
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="${CHROME:-$(ls ~/.cache/ms-playwright/chromium-*/chrome-linux*/chrome 2>/dev/null | tail -1 || true)}"
CHROME="${CHROME:-$(command -v chromium || command -v chromium-browser || command -v google-chrome || true)}"
[ -x "$CHROME" ] || { echo "No encuentro Chrome/Chromium. Define CHROME=/ruta/al/binario" >&2; exit 1; }

mkdir -p public/cv
for lang in es en; do
  out="public/cv/roberto-lopez-barbarin-cv-$lang.pdf"
  "$CHROME" --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=8000 --print-to-pdf="$out" "file://$PWD/cv/cv-$lang.html" 2>/dev/null
  pages=$(pdfinfo "$out" 2>/dev/null | awk '/^Pages:/ {print $2}')
  echo "$out · ${pages:-?} página(s)"
  [ "${pages:-1}" = 1 ] || echo "  ⚠ No cabe en una A4: recorta contenido en cv/cv-$lang.html" >&2
done
