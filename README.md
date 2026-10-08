# 🎨 Calligraphy Artistry - Premium 3D Portfolio Website

An ultra-luxury 3D calligraphy artist portfolio website featuring immersive 3D effects, floating artworks, and world-class animations. Built with Next.js, Three.js, React Three Fiber, GSAP, and Framer Motion.

## ✨ Features

### 🎭 Immersive 3D Experience
- **Hero Scene**: Full-screen 3D scene with floating golden calligraphy
- **Particle System**: 1000+ animated particles creating a luxurious atmosphere
- **3D Camera Movement**: Dynamic camera effects following mouse movement
- **Geometric Animations**: Floating 3D shapes with metallic materials

### 🌟 Premium Design
- **Black & Gold Luxury Theme**: Sophisticated color palette inspired by luxury brands
- **Glass Morphism**: Modern frosted glass UI elements
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Responsive Layout**: Mobile-first responsive design

### 📚 Sections

1. **Hero Section**
   - Full-screen 3D scene with floating calligraphy
   - Dramatic spotlight lighting
   - Text reveal animations
   - Call-to-action button

2. **Gallery**
   - Responsive grid of 6 premium artworks
   - Category filtering
   - Hover effects with details reveal
   - 3D background scene

3. **Collections**
   - 4 curated collection cards
   - Glass morphism design
   - Smooth hover animations
   - Featured highlight system

4. **Shop**
   - Premium product showcase
   - 6 different product categories
   - Shopping cart functionality
   - Quick product view

5. **Navigation**
   - Fixed responsive navigation
   - Smooth scroll links
   - Mobile menu with hamburger
   - Scroll-triggered styling

## 🛠 Technology Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: GSAP + Framer Motion
- **Language**: TypeScript
- **Performance**: Optimized WebGL rendering

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Visit `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx   # Hero 3D scene
│   │   ├── ParticlesBackground.tsx
│   │   ├── Artwork3D.tsx
│   │   └── GalleryScene.tsx
│   ├── sections/
│   │   ├── GallerySection.tsx
│   │   ├── CollectionsSection.tsx
│   │   └── ShopSection.tsx
│   └── ui/
│       ├── Navigation.tsx
│       └── ScrollReveal.tsx
├── hooks/
│── store/
├── utils/
└── public/
    ├── models/
    └── images/
```

## 🎨 Color Palette

- **Primary Black**: `#050505`
- **Luxury Gold**: `#D4AF37`
- **Cream White**: `#F5F1E8`
- **Dark Gray**: `#0a0a0a`

## 🚀 Performance Optimizations

- WebGL rendering with high-performance settings
- Lazy loading for components
- Optimized particle system (1000 particles)
- Smooth 60fps animations
- Responsive canvas sizing
- Hardware acceleration enabled

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 🔄 Key Animation Patterns

### Scroll Animations
- GSAP ScrollTrigger for scroll-based animations
- Directional reveals (up, down, left, right)
- Staggered delays for sequential animations

### Hover Effects
- Framer Motion transforms
- Smooth transitions (0.3s - 0.6s cubic-bezier)
- 3D depth effects

### 3D Animations
- Continuous rotation and floating
- Mouse-tracking camera movement
- Particle system with color gradients

## 📱 Responsive Breakpoints

- **Mobile**: 0 - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  black: '#050505',
  gold: '#D4AF37',
  cream: '#F5F1E8',
}
```

### Add Gallery Items
Update `src/components/sections/GallerySection.tsx`:
```typescript
const galleryItems = [
  { id: 1, title: '...', ... },
  // Add more items
];
```

### Adjust Animation Speed
Modify GSAP duration in components:
```typescript
gsap.to(element, {
  duration: 0.8, // Change this value
  // ...
});
```

## 📝 License

This project is part of a premium portfolio template. All rights reserved.

## 🤝 Support

For customization or integration support, contact the development team.

---

**Made with ❤️ for premium digital art galleries**
