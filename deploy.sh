#!/bin/bash
# GitHub'a yükle ve Pages'i aç
# Kullanım: ./deploy.sh GITHUB_KULLANICI_ADIN

set -e

USERNAME="$1"
REPO="bizim-hikayemiz"

if [ -z "$USERNAME" ]; then
  echo "Kullanım: ./deploy.sh GITHUB_KULLANICI_ADIN"
  echo "Örnek:   ./deploy.sh candayilar"
  exit 1
fi

if ! gh auth status &>/dev/null; then
  echo "Önce GitHub'a giriş yap:"
  echo "  gh auth login"
  exit 1
fi

cd "$(dirname "$0")"

echo "→ Repo oluşturuluyor ve kod yükleniyor..."
gh repo create "$REPO" --public --source=. --remote=origin --push 2>/dev/null || {
  git remote add origin "https://github.com/$USERNAME/$REPO.git" 2>/dev/null || true
  git push -u origin main
}

echo "→ GitHub Pages açılıyor..."
gh api "repos/$USERNAME/$REPO/pages" -X POST \
  -f "build_type=legacy" \
  -f "source[branch]=main" \
  -f "source[path]=/" 2>/dev/null || \
gh api "repos/$USERNAME/$REPO/pages" -X PUT \
  -f "build_type=legacy" \
  -f "source[branch]=main" \
  -f "source[path]=/" 2>/dev/null || true

SITE_URL="https://$USERNAME.github.io/$REPO/"
echo ""
echo "✅ Tamam!"
echo "   Site (1-2 dk sonra): $SITE_URL"
echo ""
echo "→ QR kod oluşturuluyor..."
./generate-qr.sh "$SITE_URL"
echo ""
echo "QR kod: assets/qr-code.png"
echo "Kart için tarayıcıda aç: qr-kart.html"
