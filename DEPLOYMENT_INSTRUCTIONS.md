# 🚀 Nasazení na server - Instrukce

## 📁 Co nahrát na server
Po spuštění `npm run build` se vytvoří složka `dist/` - **celý obsah této složky** nahraj na server.

## 🎥 Přidání videí na server

### 1. Vytvoř složku pro videa
Na serveru vytvoř složku: `videos/` (ve stejné úrovni jako `index.html`)

### 2. Nahraj videa s těmito názvy:
- `rozvrh.mp4` - pro "Rozvrh - Hudební parodie"
- `repre.mp4` - pro "Na ostří nože - parodie" 
- `pistace.mp4` - pro "Pistácie - parodie"

### 3. Struktura na serveru:
```
/
├── index.html
├── assets/
│   ├── main.js
│   └── main.css
└── videos/
    ├── rozvrh.mp4
    ├── repre.mp4
    └── pistace.mp4
```

## 🖼️ Přidání profilového obrázku

### 1. Nahraj obrázek
Nahraj svůj profilový obrázek jako: `IMG_3425.JPG` (do root složky)

### 2. Struktura na serveru:
```
/
├── index.html
├── IMG_3425.JPG  ← Tvůj profilový obrázek
├── assets/
└── videos/
```

## ✅ Kontrola
Po nahrání zkontroluj, že:
- ✅ Stránka se načte
- ✅ Videa se přehrávají
- ✅ Profilový obrázek se zobrazuje
- ✅ Všechny odkazy fungují

## 🔧 Řešení problémů
- **Videa se nepřehrávají**: Zkontroluj, že jsou ve formátu MP4 a mají správné názvy
- **Obrázek se nezobrazuje**: Zkontroluj název souboru `IMG_3425.JPG` (velká písmena!)
- **Stránka nefunguje**: Zkontroluj, že `index.html` je v root složce

---
**Tip:** Použij FTP klient nebo správce souborů od hostingu pro nahrání souborů.