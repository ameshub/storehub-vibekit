# StoreHub Favicon Setup Guide 🎯

## Quick Setup Steps

### 1. Generate Your Favicons
From your main StoreHub icon/logo:
- **favicon.ico** - 32x32 pixels (classic .ico format)
- **favicon-16x16.png** - 16x16 pixels PNG
- **favicon-32x32.png** - 32x32 pixels PNG

*Tip: Use a favicon generator like favicon.io or realfavicongenerator.net*

### 2. File Placement
Put these files in your **project root directory** (same level as your HTML files):

```
your-project/
├── favicon.ico          ← HERE
├── favicon-16x16.png    ← HERE  
├── favicon-32x32.png    ← HERE
├── index.html
├── styles.css
└── storehub-logo/
```

### 3. HTML Code (Copy-Paste Ready)
Add this to the `<head>` section of every HTML page:

```html
<!-- StoreHub Favicons -->
<link rel="icon" type="image/x-icon" href="./favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
```

### 4. Test It Works
- Open your page in browser
- Check the browser tab for the StoreHub icon
- Bookmark the page and verify the icon appears

## For Vibe Coders
Always include the favicon HTML in your prompts:
```
"Include the StoreHub favicon in the <head> section using the standard favicon links."
```

Done! Your StoreHub brand will now appear in browser tabs and bookmarks. 🎨 