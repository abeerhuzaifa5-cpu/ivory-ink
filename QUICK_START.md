# 🚀 Quick Start Guide

## Installation Status
npm is currently downloading dependencies. This may take 2-5 minutes.

## Once Installation Completes

### 1. Start Development Server
```bash
npm run dev
```

### 2. Open Browser
Navigate to: **http://localhost:3000**

### 3. What You'll See
- ✨ Full-screen 3D hero with floating calligraphy
- 🎨 Golden particles floating in space
- 📱 Responsive navigation bar
- 👁️ Mouse-tracking 3D effects
- 🎬 Smooth scroll animations

---

## Key Features to Explore

### Hero Section
- Move your mouse to see 3D camera tracking
- Scroll down to trigger animations
- Click "Explore Collections" button

### Gallery Section
- Use category filters to show/hide artworks
- Hover over items to see details
- 6 premium artwork cards

### Collections
- 4 curated collection cards
- Hover animations
- Featured artwork stats

### Shop
- Filter products by category
- Click + icon to add to cart
- See cart counter at top

### Mobile Experience
- Click hamburger menu ☰ for navigation
- Touch-optimized interactions
- Full responsive design

---

## File Organization

```
🎨 Calligraphy Portfolio
├── 📁 src/
│   ├── 📁 app/              ← Main page & styles
│   ├── 📁 components/
│   │   ├── 📁 3d/           ← 3D scenes & effects
│   │   ├── 📁 sections/     ← Page sections
│   │   └── 📁 ui/           ← UI components
│   ├── 📁 hooks/            ← Custom React hooks
│   ├── 📁 store/            ← State management
│   └── 📁 utils/            ← Utility functions
│
├── 📁 public/
│   ├── 📁 models/           ← 3D models
│   └── 📁 images/           ← Images & assets
│
├── 📄 package.json          ← Dependencies
├── 🎨 tailwind.config.js    ← Styling config
├── ⚙️ next.config.js        ← Next.js config
└── 📝 README.md             ← Full documentation
```

---

## Customization Examples

### Change Hero Text
File: `src/app/page.tsx`

Find this section:
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-cream to-gold">
  Calligraphy
</span>
```

Change "Calligraphy" to your artist name.

### Add New Gallery Item
File: `src/components/sections/GallerySection.tsx`

In the `galleryItems` array, add:
```typescript
{
  id: 7,
  title: 'Your Artwork Name',
  year: '2024',
  category: 'Arabic',
  price: '$2,500',
  image: 'Description',
}
```

### Update Colors
File: `tailwind.config.js`

```javascript
colors: {
  black: '#050505',      // Change black
  gold: '#D4AF37',       // Change gold
  cream: '#F5F1E8',      // Change cream
}
```

### Add New Product
File: `src/components/sections/ShopSection.tsx`

In the `products` array, add:
```typescript
{
  id: 7,
  name: 'New Product',
  price: '$999',
  category: 'Prints',
  size: '24" x 36"',
  material: 'Premium Paper',
  image: 'Your description',
}
```

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linter
npm run lint

# Clean build cache
rm -rf .next
```

---

## Troubleshooting

### Canvas Not Rendering?
1. Check browser WebGL support (most modern browsers support it)
2. Check browser console for errors (F12)
3. Try a different browser

### Page Not Loading?
1. Make sure dev server is running (`npm run dev`)
2. Check that http://localhost:3000 is correct URL
3. Clear browser cache (Ctrl+Shift+Delete)

### Animations Stuttering?
1. Close other browser tabs
2. Check browser performance (not CPU intensive)
3. Reduce particle count in `ParticlesBackground.tsx`

### Styling Looks Wrong?
1. Wait for Tailwind to compile
2. Hard refresh browser (Ctrl+Shift+R)
3. Check that tailwind.config.js hasn't been modified

---

## Next Steps

1. ✅ Installation completes
2. ✅ Development server starts
3. 📝 Customize content & colors
4. 📸 Add your artwork images
5. 🎨 Update gallery & shop items
6. 📱 Test on mobile devices
7. 🚀 Deploy to production

---

## Deployment

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Or Deploy Anywhere
```bash
npm run build
# Upload dist/ folder to your host
```

---

## Need Help?

📚 See `PROJECT_GUIDE.md` for detailed documentation
📖 Check component comments for inline help
🔗 Visit framework docs for advanced topics

---

**Ready to build something amazing!** 🎨✨
