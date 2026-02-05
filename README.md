# Cocktail List PWA

A modern, mobile-first Progressive Web App for managing and learning cocktail recipes.

## 📁 Project Structure

```
Cockatails-list/
├── data/                       # Data layer (modular)
│   ├── config.js              # List of all categories
│   ├── combiner.js            # Combines categories into allCocktails
│   └── categories/            # Individual category files
│       ├── signature.js       # Signature cocktails
│       ├── classic.js         # Classic cocktails
│       └── non-alcoholic.js   # Non-alcoholic drinks
├── index.html                 # Landing page
├── mobile_cocktails.html      # Cocktail catalog (mobile-optimized)
├── cocktail_trainer.html      # Quiz/training mode
├── cocktail_builder.html      # Recipe creator/editor
├── manifest.json              # PWA manifest
└── sw.js                      # Service worker
```

## ✨ Features

- 🍹 **Catalog**: Browse all cocktails with filtering
- 🎯 **Trainer**: Test your knowledge with quizzes
- 🛠️ **Builder**: Create and edit recipes
- 📱 **Mobile-First**: Optimized for phones
- 🌙 **Dark Mode**: Auto theme switching
- 💾 **PWA**: Install as app, works offline

## 🚀 Quick Start

1. **Run locally:**
   ```bash
   python -m http.server 8000
   ```
   
2. **Open browser:**
   ```
   http://localhost:8000
   ```

## 📝 How to Add a New Category

1. **Create category file:**
   ```bash
   # Create data/categories/new-category.js
   ```
   
   Format:
   ```javascript
   // New category cocktails
   const newcategoryCocktails = [
     {
       "id": "unique-id",
       "name": "Cocktail Name",
       "category": "new-category",
       "method": "Shake",
       "glass": "Rocks",
       "ice": "Cubes",
       "garnish": "Orange",
       "ingredients": [
         { "name": "Spirit", "qty": "50ml" }
       ]
     }
   ];
   ```

2. **Update config:**
   Add to `data/config.js`:
   ```javascript
   const COCKTAIL_CATEGORIES = [
       'signature',
       'classic',
       'non-alcoholic',
       'new-category'  // ← Add here
   ];
   ```

3. **Refresh browser** - Done! ✅

## 🗑️ How to Remove a Category

1. Delete `data/categories/category-name.js`
2. Remove from `data/config.js`
3. Refresh browser

## 🎨 Customization

### Category Colors
Edit `mobile_cocktails.html` CSS to add/modify category colors:

```css
.category-yourcategory {
    background-color: #yourcolor;
    color: white;
}
```

### PWA Settings
Edit `manifest.json` for app name, colors, icons.

## 📦 Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Done!

### Other Platforms
Just upload all files - it's static HTML/JS!

## 🛠️ Development

- **No build step** required
- Pure HTML/CSS/JavaScript
- Uses Tailwind CSS via CDN
- Mobile-first responsive design

## 📄 License

Free to use and modify.
