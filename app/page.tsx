"use client";

import { useState } from "react";

const artworks = [
  { src: "/calligraphy/divine-gold.svg", alt: "Islamic calligraphy artwork", name: "Divine Names", kind: "Islamic Calligraphy" },
  { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85", alt: "Colorful canvas art", name: "Colour Stories", kind: "Colourful Canvas" },
  { src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85", alt: "Contemporary artwork", name: "Modern Expressions", kind: "Contemporary Art" },
  { src: "/calligraphy/muhammad.svg", alt: "Arabic calligraphy canvas", name: "Sacred Script", kind: "Calligraphy" },
  { src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85", alt: "Bright expressive painting", name: "Vivid Harmony", kind: "Colourful Canvas" },
  { src: "/calligraphy/noor.svg", alt: "Noor Arabic calligraphy", name: "Noor", kind: "Islamic Art" },
  { src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85", alt: "Gallery canvas painting", name: "Quiet Grace", kind: "Wall Art" },
  { src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=85", alt: "Handmade fine art painting", name: "Meaningful Strokes", kind: "Fine Art" },
];
const sizes = [
  { name: "Small", dimensions: "8 × 8 inches", price: 800 },
  { name: "Medium", dimensions: "12 × 12 inches", price: 1500 },
  { name: "Large", dimensions: "16 × 20 inches", price: 3000 },
  { name: "Extra Large", dimensions: "24 × 30 inches", price: 5000 },
];
export default function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return <main>
    <nav className="nav"><a className="miniBrand" href="#" aria-label="Ivory Ink home"><span>II</span><b>Ivory Ink</b></a><div className="navLinks"><a href="#gallery">Gallery</a><a href="#shop">Shop</a><a href="#contact">Contact</a></div></nav>
    <section className="hero"><div className="glow" /><div className="orbitStage" aria-label="Six featured calligraphy artworks"><div className="ring ringOne" /><div className="ring ringTwo" /><div className="ring ringThree" />{artworks.slice(0,6).map((art,i)=><div key={art.name} className={`orbitArt orbitArt${i+1}`}><img src={art.src} alt={art.alt}/></div>)}<div className="brandCenter"><span className="eyebrow">A CONTEMPORARY ART STUDIO</span><h1>Ivory <em>Ink</em></h1><span className="ornament"><i/> ✧ <i/></span><p>CALLIGRAPHY · CANVAS · MEANINGFUL ART</p></div></div><a className="cta" href="#gallery">Explore Gallery <span>↗</span></a></section>
    <section className="gallery" id="gallery"><div className="sectionIntro"><span className="eyebrow">CURATED ARTWORKS</span><h2>Art that speaks <em>to the soul.</em></h2><p>Islamic calligraphy and expressive canvas art, selected for thoughtful spaces.</p></div><div className="galleryGrid">{artworks.map((art,i)=><article className="galleryCard" key={art.name}><div className="galleryImage"><img src={art.src} alt={art.alt}/></div><span>0{i+1} / {art.kind.toUpperCase()}</span><h3>{art.name}</h3></article>)}</div></section>
    <section className="shop" id="shop"><div className="sectionIntro"><span className="eyebrow">THE CANVAS SHOP</span><h2>Choose your <em>canvas.</em></h2><p>Select an artwork, then open the size options to find the right fit for your space.</p></div><div className="shopGrid">{artworks.slice(0,6).map((art,i)=><article className="shopCard productCard" key={art.name}><img className="productImage" src={art.src} alt={art.alt}/><div className="shopInfo"><span className="eyebrow">{art.kind}</span><h3>{art.name}</h3><button className="sizeToggle" type="button" aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?null:i)}>{expanded===i?"Hide sizes":"View canvas sizes"} <span>{expanded===i?"−":"⌄"}</span></button>{expanded===i&&<div className="sizeOptions">{sizes.map(s=><div className="sizeOption" key={s.name}><div><b>{s.name}</b><small>{s.dimensions}</small></div><strong>Rs. {s.price.toLocaleString("en-PK")}</strong></div>)}</div>}</div></article>)}</div><p className="priceNote">WhatsApp ordering will be enabled once the contact number is provided.</p></section>
    <section className="about" id="story"><span className="eyebrow">OUR PHILOSOPHY</span><h2>Meaningful words.<br/><em>Beautifully made.</em></h2><p>Ivory Ink brings together the expressive beauty of calligraphy and the warmth of art, adding meaning and quiet beauty to your space.</p><a className="cta" href="#shop">Find your canvas <span>↗</span></a></section>
    <footer id="contact"><a className="footerBrand" href="#">Ivory <em>Ink</em></a><span>ART WITH MEANING</span><a href="#shop">Explore the shop ↗</a><small>© {new Date().getFullYear()} Ivory Ink. Crafted with intention.</small></footer>
  </main>;
}