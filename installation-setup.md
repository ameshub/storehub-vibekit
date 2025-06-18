# StoreHub VibeKit Installation 📦
*Setup instructions for new projects*

## 🚀 Two Setup Options

### Option 1: Framework Integration (Recommended)
**Best for**: React, Vue, Angular, or any modern framework projects

1. **Copy files to your project:**
   ```
   your-project/
   ├── src/
   │   └── styles.css           ← Copy this file or import into your CSS
   ├── public/ (or static/assets/)
   │   ├── favicon.ico          ← Copy favicon files
   │   ├── favicon-16x16.png    ← Copy favicon files  
   │   ├── favicon-32x32.png    ← Copy favicon files
   │   └── storehub-logo/       ← Copy logo folder
   │       ├── StoreHub-lightbg.png
   │       └── StoreHub-darkbg.png
   ```

2. **Import styles in your framework:**
   ```javascript
   // React: In your App.js or index.js
   import './styles.css';
   
   // Vue: In your main.js or App.vue
   import './styles.css';
   
   // Angular: In your styles.css or angular.json
   @import './styles.css';
   ```

3. **Add favicon meta tags:**
   ```javascript
   // React: In public/index.html or using react-helmet
   // Vue: In public/index.html or using vue-meta
   // Angular: In src/index.html
   
   <link rel="icon" type="image/x-icon" href="/favicon.ico">
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
   ```

4. **Start using classes:**
   ```javascript
   <button className="btn btn-primary">Save</button>
   <div className="card">Content</div>
   ```

### Option 2: Tailwind CSS Setup
**Best for**: When you want full Tailwind utilities + StoreHub components

1. **Install Tailwind:**
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. **Replace tailwind.config.js:**
   ```javascript
   // Copy our tailwind.config.js over the generated one
   // This includes all StoreHub brand tokens
   ```

3. **Update your CSS:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   /* Import StoreHub components */
   @import './storehub-components.css';
   ```

4. **Build process:**
   ```bash
   # For development
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   
   # Most frameworks handle this automatically with proper config
   ```

## 📁 Required Files Checklist

### Essential Files:
- [ ] `styles.css` - StoreHub component styles
- [ ] `storehub-vibekit.md` - Prompt templates
- [ ] `team-quick-start-guide.md` - 1-page team guide

### Logo & Branding:
- [ ] `favicon.ico` - Main favicon
- [ ] `favicon-16x16.png` - Small favicon
- [ ] `favicon-32x32.png` - Medium favicon  
- [ ] `storehub-logo/StoreHub-lightbg.png` - Logo for light backgrounds
- [ ] `storehub-logo/StoreHub-darkbg.png` - Logo for dark backgrounds

### Optional:
- [ ] `tailwind.config.js` - If using Tailwind option

## 🧪 Test Your Setup

1. **Create a test component:**
   ```javascript
   // React example
   function TestComponent() {
     return (
       <div className="container">
         <img src="/storehub-logo/StoreHub-lightbg.png" className="storehub-logo" alt="StoreHub" />
         <button className="btn btn-primary">Test Button</button>
         <div className="card">Test Card</div>
       </div>
     );
   }
   
   // Vue example
   <template>
     <div class="container">
       <img src="/storehub-logo/StoreHub-lightbg.png" class="storehub-logo" alt="StoreHub" />
       <button class="btn btn-primary">Test Button</button>
       <div class="card">Test Card</div>
     </div>
   </template>
   ```

2. **Verify it works:**
   - [ ] Favicon appears in browser tab
   - [ ] Logo displays correctly
   - [ ] Button is orange with proper styling
   - [ ] Card has shadow and padding

## 🆘 Troubleshooting

**Favicon not showing?**
- Hard refresh browser (Ctrl+F5)
- Check file paths are correct (`/favicon.ico` for public folder)
- Try incognito mode
- Verify files are in public/static directory

**Styles not loading?**
- Check CSS import statement
- Ensure styles.css is properly imported
- Look for console errors in browser dev tools
- Verify CSS classes are applied in DOM

**Logo not displaying?**
- Check image file paths
- Verify storehub-logo folder is in public/assets directory
- Test image URLs directly in browser
- Check for 404 errors in network tab

**Framework-specific issues:**
- **React**: Ensure files are in public/ folder for direct access
- **Vue**: Check if files are in public/ or static/ depending on setup
- **Angular**: Verify assets are in src/assets/ and properly configured
- **Next.js**: Files should be in public/ folder
- **Nuxt**: Files should be in static/ folder

## ✅ You're Ready!
Once everything is working, your team can start using the templates from `storehub-vibekit.md` to build StoreHub-branded interfaces! 🎨✨

## 🔄 Framework Examples

### React with StoreHub
```javascript
import './styles.css';

function App() {
  return (
    <div className="container">
      <header className="flex items-center justify-between section-spacing">
        <img src="/storehub-logo/StoreHub-lightbg.png" className="storehub-logo" alt="StoreHub" />
        <button className="btn btn-primary">Get Started</button>
      </header>
    </div>
  );
}
```

### Vue with StoreHub
```vue
<template>
  <div class="container">
    <header class="flex items-center justify-between section-spacing">
      <img src="/storehub-logo/StoreHub-lightbg.png" class="storehub-logo" alt="StoreHub" />
      <button class="btn btn-primary">Get Started</button>
    </header>
  </div>
</template>

<style>
@import './styles.css';
</style>
``` 