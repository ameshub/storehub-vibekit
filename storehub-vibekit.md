# StoreHub VibeKit 🎨
*Copy-paste templates for building StoreHub-branded interfaces*

## 🚀 Master Prompt Template

```
Build a [PAGE_TYPE] that feels like StoreHub using these rules:

COLORS (use these exact CSS variables):
- Primary buttons: var(--storehub-orange) 
- Links: var(--storehub-blue)
- Background: var(--storehub-bg-light)
- Cards: var(--storehub-bg-white)
- Main text: var(--storehub-text-dark)
- Secondary text: var(--storehub-text-gray)

DATA COLORS (use sparingly and with care):
- Very good data: var(--data-positive) or class="data-positive" (Green)
- Very bad data: var(--data-negative) or class="data-negative" (Red)  
- Neutral data: class="data-neutral" (Dark gray)
- NEVER use orange or blue for data - this causes UI confusion

SPACING (generous and clean):
- Container padding: p-lg or p-xl
- Section spacing: Use .section-spacing class for consistent vertical spacing
- Card grids: Use .card-grid class for consistent horizontal/vertical spacing
- Card padding: p-lg for important content, p-md for simple cards
- Don't cram content - use breathing room
- Rule: Horizontal and vertical spacing should ALWAYS match

TYPOGRAPHY:
- Page headings: class="text-xl" (28px, semibold)
- Section headings: class="text-lg" (20px, semibold)
- Body text: class="text-base" (14px, normal)
- Small text: class="text-sm" for secondary info

COMPONENTS:
- Buttons: Use .btn-primary (orange) or .btn-secondary (light gray outline)
- Links: Use .link class for blue text links (never blue buttons)
- Cards: Use .card for main content, .card-simple for less important content
- Forms: Use .input class for form fields
- Layout: Use .container for page width, .flex and .gap-md for layouts
- Logo: Use StoreHub-lightbg.png on light backgrounds, StoreHub-darkbg.png on dark backgrounds

BUTTON RULES (Simple & Clear):
- Primary actions: Orange buttons (.btn-primary) - Save, Submit, Add New
- Secondary actions: Light gray outline buttons (.btn-secondary) - Cancel, Filter, Edit
- Links only: Blue text (.link) - navigation, "Learn more", external links
- NEVER use blue buttons - blue is for links only

BRANDING:
- Always include StoreHub logo in headers using class="storehub-logo"
- Include favicon setup in your framework
- Choose correct logo version based on background color

PERSONALITY (Professional but Approachable):
- Clean, uncluttered layout
- Generous spacing - users need breathing room
- Make primary actions obvious with orange buttons
- Use gray for secondary actions and links
- Trustworthy for small business owners

SPECIFIC REQUIREMENTS:
[USER FILLS THIS IN]

Use your framework (React, Vue, Angular, etc.) and the CSS classes from styles.css. Make it mobile-friendly.
```

## 🎨 Logo & Favicon Usage

### StoreHub Logo Setup
```javascript
// Logo component example (adapt to your framework)
const StoreHubLogo = ({ isDarkBackground = false, className = "" }) => {
  const logoSrc = isDarkBackground 
    ? "/storehub-logo/StoreHub-darkbg.png"
    : "/storehub-logo/StoreHub-lightbg.png";
    
  return (
    <img 
      src={logoSrc} 
      alt="StoreHub" 
      className={`storehub-logo ${className}`}
    />
  );
};
```

### Logo Sizing Guidelines
- **Header/Navigation**: 100px width (default)
- **Footer**: 80px width  
- **Small contexts**: 60px width minimum
- **Always maintain aspect ratio** - never stretch or squash

### Logo CSS Class
```css
.storehub-logo {
  height: auto;
  max-width: 100px; /* Good for most contexts */
}

/* Responsive logo sizing */
@media (max-width: 768px) {
  .storehub-logo {
    max-width: 80px;
  }
}
```

### Favicon Setup
Add to your framework's HTML head section or meta configuration:
```javascript
// React (in public/index.html or Next.js _app.js)
// Vue (in public/index.html or Nuxt config)
// Angular (in src/index.html)

<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

### Required Files Structure
```
your-project/
├── public/ (or static/ or assets/)
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── storehub-logo/
│       ├── StoreHub-lightbg.png
│       └── StoreHub-darkbg.png
├── src/
│   └── styles.css (or import into your CSS)
```

### Logo Usage Rules
- **Light bg version**: Use on white, light gray, or light colored backgrounds
- **Dark bg version**: Use on dark gray, orange, blue, or colored backgrounds  
- **Minimum clear space**: Equal to the height of the "S" in StoreHub around the logo
- **Never**: Rotate, skew, or apply effects to the logo
- **Always**: Keep readable and maintain sufficient contrast

## 📋 Quick Component Guide

### Button Components
```javascript
// Primary action (orange)
<button className="btn btn-primary">Save Changes</button>

// Secondary action (light gray outline)
<button className="btn btn-secondary">Cancel</button>
```

### Link Components (Blue Text Only)
```javascript
// For navigation and external links
<a href="/help" className="link">Learn more</a>
<a href="#details" className="link">View details</a>
```

### Data Display Components (Use Sparingly)
```javascript
// Very good performance
<span className="data-positive">+15%</span>

// Very bad performance  
<span className="data-negative">-8%</span>

// Neutral data
<span className="data-neutral">$24,580</span>

// DON'T use orange or blue for data
// ❌ WRONG: <span style={{color: 'var(--storehub-orange)'}}>$24,580</span>
```

### Card Components
```javascript
<div className="card">
  <h2 className="text-lg mb-md">Important Content</h2>
  <p className="text-base">Main content goes here...</p>
</div>

<div className="card-simple">
  <p className="text-sm text-muted">Less important info</p>
</div>
```

### Layout Structure
```javascript
<div className="container">
  <div className="flex flex-col">
    {/* Header with logo */}
    <header className="flex items-center justify-between section-spacing">
      <StoreHubLogo />
      <button className="btn btn-primary">Main Action</button>
    </header>
    
    <h1 className="text-xl section-spacing">Page Title</h1>
    
    {/* Card grid with consistent spacing */}
    <div className="card-grid">
      <div className="card flex-1">Content</div>
      <div className="card flex-1">Content</div>
    </div>
  </div>
</div>
```

### Spacing Utilities
```javascript
{/* For major page sections */}
<section className="section-spacing">...</section>

{/* For card grids (auto-consistent spacing) */}
<div className="card-grid">
  <div className="card flex-1">Card 1</div>
  <div className="card flex-1">Card 2</div>
</div>

{/* For flex layouts */}
<div className="flex gap-lg">...</div>
```

### Form Components
```javascript
<input type="text" className="input mb-md" placeholder="Enter name" />
<button className="btn btn-primary">Submit</button>
```

## 🎯 Page-Specific Templates

### Dashboard Page
```
Build a dashboard page that feels like StoreHub with these sections:
- Header with page title (text-xl) and primary action button (btn-primary)
- Grid of 3-4 metric cards using .card-grid and .card-simple
- Main content area with .card containing a table or chart
- Use .section-spacing for vertical spacing, .card-grid for card layouts
- Orange primary button for main action, gray buttons (btn-secondary) for filters
- Buttons should use regular font-weight, not bold
```

### Form Page
```
Build a form page that feels like StoreHub:
- Clean header with form title (text-xl)
- Single .card containing the form
- Use .input class for all form fields
- Group related fields with mb-md spacing
- Primary submit button (btn-primary) on the right
- Cancel button (btn-secondary) or link (class="link") on the left
```

### List/Table Page
```
Build a list page that feels like StoreHub:
- Header with title (text-xl) and "Add New" button (btn-primary)
- Search/filter bar in a .card-simple with gray buttons (btn-secondary)
- Main table/list in a .card with generous padding
- Action buttons using btn-secondary for table row actions
- Use mb-lg spacing between sections
```

## ⚠️ StoreHub Don'ts

- **Don't** use blue buttons - blue is for links only, not buttons
- **Don't** use orange or blue for data display - causes UI confusion
- **Don't** overuse green/red - reserve for very good/very bad data only
- **Don't** mix horizontal/vertical spacing - use .card-grid and .section-spacing
- **Don't** use semibold font-weight on buttons - keep them regular weight
- **Don't** create button confusion - stick to orange primary + gray secondary
- **Don't** use bright, flashy colors
- **Don't** cram content together - always use generous spacing
- **Don't** make actions unclear - orange = primary action
- **Don't** use tiny text - maintain readability
- **Don't** ignore mobile - make it responsive

## 🎨 Color Psychology

- **Orange** = Empowerment, main actions, confidence (buttons only)
- **Blue** = Trust, reliability (links only, never data)  
- **Gray** = Professional, supportive, informational (secondary buttons, neutral data)
- **Green** = Very good performance (use sparingly for data)
- **Red** = Very bad performance (use sparingly for data)
- **White space** = Breathing room, clarity, professionalism

### Data Color Rules:
- **Neutral data** (sales figures, counts): Dark gray
- **Very good trends** (+15% growth): Green
- **Very bad trends** (-10% decline): Red
- **Everything else**: Stay neutral gray

## 🚀 Success Checklist

Your interface feels "StoreHub" if:
- [ ] Orange buttons stand out for primary actions
- [ ] Content has generous padding and spacing
- [ ] Text hierarchy is clear (xl → lg → base → sm)
- [ ] Cards group related content clearly
- [ ] It looks professional but not intimidating
- [ ] Small business owners would feel confident using it

Ready to vibecode! Copy the master template and fill in your specific requirements. 🎨✨ 