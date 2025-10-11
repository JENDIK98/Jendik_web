# 🐧 Struktura souborů na Linux serveru

## 📁 Kompletní struktura po nahrání

```
/var/www/html/          ← Root složka webu (nebo jiná dle hostingu)
├── index.html          ← Hlavní stránka (z dist/)
├── IMG_3425.JPG        ← Tvůj profilový obrázek
├── assets/             ← Složka se styly a skripty (z dist/)
│   ├── main.js         ← Hlavní JavaScript soubor
│   ├── main.css        ← Hlavní CSS soubor
│   └── další soubory   ← Případné další assets (fonty, obrázky)
└── videos/             ← Složka s videi (vytvoříš ručně)
    ├── rozvrh.mp4      ← Video "Rozvrh - Hudební parodie"
    ├── repre.mp4       ← Video "Na ostří nože - parodie"
    └── pistace.mp4     ← Video "Pistácie - parodie"
```

## 🔒 **DŮLEŽITÉ - HTTPS odkazy v kódu:**

Aplikace teď používá **absolutní HTTPS odkazy**:
- Videa: `https://jendik.cz/videos/nazev.mp4`
- Obrázek: `https://jendik.cz/IMG_3425.JPG`

**Pokud máš jinou doménu než `jendik.cz`, řekni mi ji a upravím odkazy!**

## 🔧 Linux příkazy pro vytvoření struktury

### 1. Přejdi do root složky webu:
```bash
cd /var/www/html/
```

### 2. Vytvoř složku pro videa:
```bash
mkdir videos
```

### 3. Nastav správná oprávnění:
```bash
chmod 755 videos/
chmod 644 *.html *.jpg *.JPG
chmod 644 assets/*
chmod 644 videos/*.mp4
```

### 4. Zkontroluj strukturu:
```bash
ls -la
```

## 📤 Postup nahrání

### Varianta A: FTP/SFTP
1. Nahraj **celý obsah** složky `dist/` do `/var/www/html/`
2. Nahraj `IMG_3425.JPG` do `/var/www/html/`
3. Vytvoř složku `videos/` a nahraj do ní MP4 soubory

### Varianta B: SSH + SCP
```bash
# Nahraj dist obsah
scp -r dist/* user@server:/var/www/html/

# Nahraj profilový obrázek
scp IMG_3425.JPG user@server:/var/www/html/

# Vytvoř složku pro videa
ssh user@server "mkdir -p /var/www/html/videos"

# Nahraj videa
scp *.mp4 user@server:/var/www/html/videos/
```

## ✅ Kontrola funkčnosti

### 1. Zkontroluj soubory:
```bash
ls -la /var/www/html/
ls -la /var/www/html/assets/
ls -la /var/www/html/videos/
```

### 2. Zkontroluj oprávnění:
```bash
find /var/www/html/ -type f -name "*.html" -exec ls -l {} \;
find /var/www/html/ -type f -name "*.mp4" -exec ls -l {} \;
```

### 3. Test v prohlížeči:
- Otevři `http://tvoje-domena.cz`
- Zkontroluj, že se načte stránka
- Zkontroluj, že se zobrazuje profilový obrázek
- Zkontroluj, že se přehrávají videa

## 🚨 Časté problémy a řešení

### Problém: Videa se nepřehrávají
```bash
# Zkontroluj, že existují
ls -la /var/www/html/videos/

# Zkontroluj oprávnění
chmod 644 /var/www/html/videos/*.mp4
```

### Problém: Obrázek se nezobrazuje
```bash
# Zkontroluj název (velká písmena!)
ls -la /var/www/html/IMG_3425.JPG

# Nastav oprávnění
chmod 644 /var/www/html/IMG_3425.JPG
```

### Problém: Stránka se nenačte
```bash
# Zkontroluj index.html
ls -la /var/www/html/index.html

# Zkontroluj assets složku
ls -la /var/www/html/assets/
```

## 📝 Poznámky pro různé hostingy

### Shared hosting (cPanel, Plesk):
- Root složka často: `/public_html/`
- Použij File Manager v administraci

### VPS/Dedicated server:
- Root složka často: `/var/www/html/`
- Máš plný SSH přístup

### Apache server:
- Zkontroluj `.htaccess` soubory
- Možná potřebuješ `AllowOverride All`

### Nginx server:
- Zkontroluj konfiguraci pro statické soubory
- Ujisti se, že jsou povoleny MP4 soubory