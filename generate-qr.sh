#!/bin/bash
# QR kod oluştur
# Kullanım: ./generate-qr.sh https://kullanici.github.io/bizim-hikayemiz/

URL="$1"

if [ -z "$URL" ]; then
  echo "Kullanım: ./generate-qr.sh SITE_URL"
  echo "Örnek:   ./generate-qr.sh https://candayilar.github.io/bizim-hikayemiz/"
  exit 1
fi

cd "$(dirname "$0")"
mkdir -p assets

ENCODED=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$URL', safe=''))")
curl -sL "https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=20&data=$ENCODED" \
  -o assets/qr-code.png

echo "QR kod kaydedildi: assets/qr-code.png"
echo "URL: $URL"
