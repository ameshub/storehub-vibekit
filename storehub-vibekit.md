# StoreHub VibeKit 🎨
*One document, copy-paste templates, instant StoreHub-branded results*

## 🚀 Quick Setup (2 minutes)

1. **Copy these files to your project:**
   ```
   your-project/
   ├── src/styles.css              ← Copy this
   ├── tailwind.config.js          ← Copy this (optional)
   └── public/                     ← Copy these assets
       ├── favicon.ico              (optional)
       ├── favicon-16x16.png        (optional)
       ├── favicon-32x32.png        (optional)
       └── storehub-logo/
           ├── StoreHub-lightbg.png 
           └── StoreHub-darkbg.png
   ```

2. **Import the styles:**
   ```javascript
   // In your main CSS or component file
   import './styles.css';
   ```

3. **Test it works:**
   Ask Cursor: *"Create a test button with orange primary styling"*
   ✅ Orange button = you're ready!

---

## 📋 Master Template (Copy This!)

```
Build a [PAGE_TYPE] that feels like StoreHub using these rules:

COLORS:
- Primary buttons: Orange (.btn-primary) - Save, Submit, Add New
- Secondary buttons: Gray outline (.btn-secondary) - Cancel, Filter, Edit  
- Links: Blue text (.link) - navigation, "Learn more" 
- Cards: White with shadow (.card)
- NEVER use blue buttons or orange/blue for data

SPACING:
- Use .section-spacing for vertical spacing between sections
- Use .card-grid for consistent card layouts
- Use generous padding - don't cram content

TYPOGRAPHY:
- Page headings: .text-xl (large, semibold)
- Section headings: .text-lg (medium, semibold)  
- Body text: .text-base (normal size)
- Small text: .text-sm for secondary info

LAYOUT:
- Use .container for page width
- Include StoreHub logo in header (.storehub-logo)
- Use .card for grouped content
- Make it mobile-friendly

PERSONALITY:
- Professional but approachable
- Clean, uncluttered layout
- Make primary actions obvious with orange
- Trustworthy for small business owners

SPECIFIC REQUIREMENTS:
[FILL IN YOUR DETAILS HERE]

Use your framework and make it responsive.
```

---

## 🎯 Quick Templates (Ready to Use)

### Dashboard
```
Build a sales dashboard with metric cards showing revenue, orders, and customers. Include a data table and an orange "Add Product" button in the header.
```

### Form Page  
```
Build a customer form with input fields for name, email, phone, and company. Include orange "Save Customer" and gray "Cancel" buttons.
```

### Settings Page
```
Build a settings page with sections for account info, notifications, and billing. Include toggle switches and orange "Save Changes" button.
```

### List/Table Page
```
Build a product list with search, filters, and a data table. Include orange "Add Product" button and gray "Export" button.
```

---

## 🎨 What You Can Ask For

### Buttons
- **"Orange Save button"** or **"primary button"** → Gets you the main action button
- **"Gray Cancel button"** or **"secondary button"** → Gets you secondary actions  
- **"Blue Learn more link"** → Gets you navigation/external links

### Cards & Layout
- **"Put it in a card"** → Groups content with white background and shadow
- **"Use card grid layout"** → Automatically spaces multiple cards
- **"Add section spacing"** → Proper vertical spacing between page sections
- **"Container layout"** → Proper page width and responsive design

### Logo
- **"Include StoreHub logo in header"** → Automatically uses correct logo version
- **"StoreHub logo on light background"** → Uses light background version
- **"StoreHub logo on dark background"** → Uses dark background version

### Data Colors (Use Sparingly)
- **"Show positive growth in green"** → For very good performance (+15%)
- **"Show decline in red"** → For very bad performance (-8%)  
- **"Display revenue in neutral gray"** → For normal data display

---

## ✅ Success Checklist

Your result feels "StoreHub" if:
- [ ] Orange buttons for main actions (Save, Submit, Add)
- [ ] Gray buttons for secondary actions (Cancel, Filter)
- [ ] Blue text for links (never blue buttons!)
- [ ] StoreHub logo in header
- [ ] Generous spacing, not cramped
- [ ] Clear text hierarchy (big → medium → small)
- [ ] White cards with subtle shadows

---

## 🚨 Common Mistakes to Avoid

- **Don't** use blue buttons (blue = links only)
- **Don't** use orange/blue for data values (causes confusion)
- **Don't** make text bold everywhere (keep normal font-weight)
- **Don't** cram content together (use .section-spacing)
- **Don't** mix up logo versions (light bg vs dark bg)

---

## 💡 Real Examples

### Good Dashboard Prompt:
```
Build a sales dashboard with:
- Header with StoreHub logo and orange "Add Product" button
- 4 metric cards showing revenue, orders, customers, conversion rate
- Data table with product list and gray "Export" button
- Use green for positive metrics, red for negative ones
```

### Good Form Prompt:
```
Build a new customer form with:
- Input fields for name, email, phone, company, notes
- Orange "Save Customer" and gray "Cancel" buttons
- Validation messages in red
- StoreHub logo in header
```

---

## 🆘 Troubleshooting

**Orange button not showing?**
- Check if styles.css is imported
- Verify .btn-primary class is applied
- Look for console errors in browser dev tools

**Logo not displaying?**
- Check file path: `/storehub-logo/StoreHub-lightbg.png`
- Verify files are in public/static directory
- Try loading image URL directly in browser

**Spacing looks wrong?**
- Use .section-spacing for vertical spacing
- Use .card-grid for card layouts
- Don't mix custom spacing with our classes

**Need help?**
- Results don't look "StoreHub enough"
- Custom components not covered here
- Integration issues with your framework

---

## 🎯 You're Ready!

1. **Copy the master template** above
2. **Fill in [PAGE_TYPE] and requirements**
3. **Paste into Cursor and hit enter**
4. **Get StoreHub-branded results!**

The whole point is speed and consistency - you should be building, not wrestling with design decisions! 🚀✨ 