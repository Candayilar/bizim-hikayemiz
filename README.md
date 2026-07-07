# 💕 Bizim Hikayemiz

Kız arkadaşına özel romantik anı sitesi. Fotoğraflar, şarkılar, hikaye ve sevgi notları.

## 🎨 Özelleştirme

Tüm içerik **`js/config.js`** dosyasında. Şunları düzenle:

- İsimler (`seninAdin`, `onunAdi`)
- Açılış mesajı ve tarih
- Fotoğraf listesi ve alt yazıları
- Şarkı listesi
- Hikaye bölümleri
- Sevgi notları
- Son sürpriz mesajı

### Fotoğraflar

`assets/photos/` klasörüne koy:
- `foto1.jpg`, `foto2.jpg`, ... (config.js'deki isimlerle aynı olmalı)

### Şarkılar

`assets/music/` klasörüne `.mp3` dosyalarını koy:
- `sarki1.mp3`, `sarki2.mp3`, `sarki3.mp3`

## 🚀 GitHub Pages ile Yayınlama

### 1. GitHub'da repo oluştur

1. [github.com/new](https://github.com/new) adresine git
2. Repo adı: `bizim-hikayemiz` (veya istediğin bir isim)
3. **Public** seç
4. "Create repository" tıkla

### 2. Projeyi yükle

Terminalde bu komutları çalıştır (GitHub kullanıcı adını yaz):

```bash
cd ~/Projects/bizim-hikayemiz
git init
git add .
git commit -m "Bizim hikayemiz — romantik anı sitesi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/bizim-hikayemiz.git
git push -u origin main
```

### 3. GitHub Pages'i aç

1. GitHub'da repoya git
2. **Settings** → **Pages**
3. **Source**: "Deploy from a branch"
4. **Branch**: `main` → `/ (root)` → **Save**

1-2 dakika sonra site şu adreste yayında olur:

```
https://KULLANICI_ADIN.github.io/bizim-hikayemiz/
```

Bu linki kız arkadaşına gönder 💕

## 💻 Lokal Test

```bash
cd ~/Projects/bizim-hikayemiz
python3 -m http.server 8080
```

Tarayıcıda: `http://localhost:8080`

## 📱 Özellikler

- Kaydırılabilir fotoğraf galerisi (mobilde swipe)
- 2-3 şarkılık müzik çalar
- Hikaye zaman çizelgesi
- Tıklanabilir sevgi notları (kart çevirme animasyonu)
- Uçan kalp animasyonları
- Mobil uyumlu tasarım
