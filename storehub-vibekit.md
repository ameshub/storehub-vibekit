# StoreHub VibeKit 🎨
*Fill-in-the-blanks templates for instant StoreHub-branded results*

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

## 📋 Universal Prompt Template

**Every prompt should include these elements:**

```
Build a [WHAT YOU'RE BUILDING] using the stylesheet and vibekit provided.

TARGET AUDIENCE: [WHO WILL USE THIS]
GOAL: Ensure [TARGET AUDIENCE] can [WHAT THEY NEED TO ACCOMPLISH]

STOREHUB BRAND PERSONALITY:
- Professional but approachable 
- Trustworthy for small business owners
- Clean, uncluttered layout
- Orange = primary actions, Gray = secondary actions, Blue = links only

SPECIFIC REQUIREMENTS:
[YOUR CUSTOM DETAILS HERE]

Make it mobile-friendly and use StoreHub logo in header.
```

---

## 🎯 Fill-in-the-Blanks Examples

### Example 1: Restaurant Owner
```
Build a daily sales tracker using the stylesheet and vibekit provided.

TARGET AUDIENCE: Restaurant owners checking end-of-day performance
GOAL: Ensure restaurant owners can quickly see if they hit their daily targets

STOREHUB BRAND PERSONALITY:
- Professional but approachable 
- Trustworthy for small business owners
- Clean, uncluttered layout
- Orange = primary actions, Gray = secondary actions, Blue = links only

SPECIFIC REQUIREMENTS:
- Show today's revenue, orders, average order value
- Compare to yesterday and last week
- Big orange "Close Day" button
- List of top-selling items

Make it mobile-friendly and use StoreHub logo in header.
```

### Example 2: Retail Store Manager
```
Build an inventory alert dashboard using the stylesheet and vibekit provided.

TARGET AUDIENCE: Retail managers who need to restock quickly
GOAL: Ensure managers can spot low inventory before running out of stock

STOREHUB BRAND PERSONALITY:
- Professional but approachable 
- Trustworthy for small business owners
- Clean, uncluttered layout
- Orange = primary actions, Gray = secondary actions, Blue = links only

SPECIFIC REQUIREMENTS:
- Show items below restock threshold
- Sort by urgency (critical, low, medium)
- Orange "Reorder" buttons for each item
- Quick search to find specific products

Make it mobile-friendly and use StoreHub logo in header.
```

### Example 3: Service Business Owner
```
Build a customer appointment scheduler using the stylesheet and vibekit provided.

TARGET AUDIENCE: Service business owners (salon, clinic, repair shop) managing bookings
GOAL: Ensure business owners can quickly schedule and manage customer appointments

STOREHUB BRAND PERSONALITY:
- Professional but approachable 
- Trustworthy for small business owners
- Clean, uncluttered layout
- Orange = primary actions, Gray = secondary actions, Blue = links only

SPECIFIC REQUIREMENTS:
- Calendar view with time slots
- Customer contact info and service type
- Orange "Book Appointment" and "Confirm" buttons
- Gray "Reschedule" and "Cancel" options

Make it mobile-friendly and use StoreHub logo in header.
```

---

## 🎨 StoreHub Brand Guidelines

### Colors (Always Follow These)
- **Orange buttons** → Primary actions (Save, Add, Submit, Confirm)
- **Gray buttons** → Secondary actions (Cancel, Edit, Filter, Export)  
- **Blue text** → Links and navigation (NEVER blue buttons)
- **White cards** → Content grouping with subtle shadows
- **Green/Red** → Only for data that's clearly positive/negative

### Spacing & Layout
- **Generous padding** → Don't cram content together
- **Clear hierarchy** → Big headings → medium headings → body text
- **StoreHub logo** → Always in header
- **Mobile-first** → Works on phones and tablets

### Personality Reminders
- **Professional but approachable** → Serious enough for business, friendly enough for daily use
- **Trustworthy** → People are running their livelihoods on this
- **Uncluttered** → Small business owners are busy, don't overwhelm them

---

## ✅ Success Checklist

Your result feels "StoreHub" if:
- [ ] Orange buttons for main actions 
- [ ] Gray buttons for secondary actions
- [ ] Blue text for links (never blue buttons!)
- [ ] StoreHub logo in header
- [ ] Generous spacing, not cramped
- [ ] Makes sense for a small business owner to use
- [ ] Mobile-friendly layout

---

## 🚨 Red Flags to Avoid

- **Blue buttons** → Confusing (blue = links only)
- **Orange/blue for data** → Causes brand confusion  
- **Cramped layout** → Small business owners need breathing room
- **Too many bold fonts** → Overwhelming and unprofessional
- **Complex navigation** → Keep it simple for busy users

---

## 🆘 Troubleshooting

**Orange buttons not showing?**
- Check if styles.css is imported correctly
- Verify you're using the right CSS classes

**Logo not displaying?**
- Check file path: `/storehub-logo/StoreHub-lightbg.png`
- Make sure logo files are in your public directory

**Doesn't feel "StoreHub enough"?**
- Use the Universal Prompt Template above
- Focus on your target audience's actual needs
- Remember: professional but approachable

**Need more examples?**
Think about your specific use case:
- Who will use this? (restaurant owner, shop manager, service provider)
- What do they need to accomplish? (check sales, manage inventory, schedule appointments)
- When will they use it? (end of day, during busy periods, planning ahead)

---

## 🎯 You're Ready!

1. **Copy the Universal Prompt Template**
2. **Fill in your specific details**
3. **Paste into Cursor**
4. **Get StoreHub-branded results that actually work for your users!**

Remember: You're building for real small business owners who depend on these tools. Make it trustworthy, approachable, and useful! 🚀✨