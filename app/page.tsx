const artworks = [
  { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85", alt: "Colorful abstract canvas artwork", name: "Colour Stories", kind: "Colourful Canvas" },
  { src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85", alt: "Contemporary painted artwork", name: "Modern Expressions", kind: "Contemporary Art" },
  { src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85", alt: "Bright expressive painting", name: "Vivid Harmony", kind: "Colourful Canvas" },
  { src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85", alt: "Gallery canvas painting", name: "Quiet Grace", kind: "Wall Art" },
  { src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=85", alt: "Handmade fine art painting", name: "Meaningful Strokes", kind: "Fine Art" },
  { src: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=85", alt: "Fine art canvas detail", name: "Timeless Bloom", kind: "Decorative Art" },
];

const sizes = [
  { name: "Small Canvas", size: "8 × 8 inches", price: 800, note: "A thoughtful little accent" },
  { name: "Medium Canvas", size: "12 × 12 inches", price: 1500, note: "Made for shelves and cosy corners" },
  { name: "Large Canvas", size: "16 × 20 inches", price: 3000, note: "A statement for your favourite wall" },
  { name: "Extra Large Canvas", size: "24 × 30 inches", price: 5000, note: "A centrepiece made to be treasured" },
];

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="miniBrand" href="#" aria-label="Ivory Ink home"><span>II</span><b>Ivory Ink</b></a>
      <div className="navLinks"><a href="#collection">Collection</a><a href="#story">Our Story</a><a href="#shop">Shop</a><a href="#contact">Contact</a></div>
    </nav>
    <section className="hero">
      <div className="glow" />
      <div className="orbitStage" aria-label="Rotating collection of six artworks">
        <div className="ring ringOne" /><div className="ring ringTwo" /><div className="ring ringThree" />
        {artworks.map((art, i) => <div key={art.src} className={`orbitArt orbitArt${i + 1}`}><img src={art.src} alt={art.alt} /></div>)}
        <div className="brandCenter"><span className="eyebrow">A CONTEMPORARY ART STUDIO</span><h1>Ivory <em>Ink</em></h1><span className="ornament"><i /> ✧ <i /></span><p>CALLIGRAPHY · CANVAS · MEANINGFUL ART</p></div>
      </div>
      <a className="cta" href="#collection">Explore the collection <span>↗</span></a>
      <span className="heroFoot">ART WITH MEANING · MADE TO BE TREASURED</span>
    </section>
    <section className="gallery" id="collection">
      <div className="sectionIntro"><span className="eyebrow">THE ART COLLECTION</span><h2>Art that speaks <em>to the soul.</em></h2><p>Expressive colours, meaningful calligraphy and thoughtful pieces for spaces that feel like home.</p></div>
      <div className="galleryGrid">{artworks.map((art, i) => <article className="galleryCard" key={art.src}><div className="galleryImage"><img src={art.src} alt={art.alt}/></div><span>0{i + 1} / {art.kind.toUpperCase()}</span><h3>{art.name}</h3></article>)}</div>
    </section>
    <section className="shop" id="shop">
      <div className="sectionIntro"><span className="eyebrow">THE CANVAS SHOP</span><h2>Your wall. Your <em>story.</em></h2><p>Choose a canvas size to start your own meaningful art piece. Custom calligraphy and colour requests can be discussed with the studio.</p></div>
      <div className="shopGrid">{sizes.map((item, i) => <article className="shopCard" key={item.name}><div className="sizeMark"><span>{["S", "M", "L", "XL"][i]}</span><small>CANVAS</small></div><div className="shopInfo"><span className="eyebrow">{item.size}</span><h3>{item.name}</h3><p>{item.note}</p><strong>Rs. {item.price.toLocaleString("en-PK")}</strong><a href={`https://wa.me/923294408631?text=${encodeURIComponent("Hello Ivory Ink, I am interested in a " + item.name + " (" + item.size + ") priced at Rs. " + item.price + ". Please share the available artwork designs.")}`} target="_blank" rel="noreferrer" className="shopLink">Enquire on WhatsApp ↗</a></div></article>)}</div>
      <p className="priceNote">Prices are starting prices. Final pricing may vary by artwork, custom lettering and finish.</p>
    </section>
    <section className="about" id="story"><span className="eyebrow">OUR PHILOSOPHY</span><h2>Meaningful words.<br/><em>Beautifully made.</em></h2><p>Ivory Ink brings together the expressive beauty of calligraphy and the warmth of handmade art. Each piece is chosen to add meaning, character and quiet beauty to your space.</p><a className="cta" href="#shop">Find your canvas <span>↗</span></a></section>
    <footer id="contact"><a className="footerBrand" href="#">Ivory <em>Ink</em></a><span>ART WITH MEANING</span><a href="https://wa.me/923294408631" target="_blank" rel="noreferrer">Discuss a custom piece ↗</a><small>© {new Date().getFullYear()} Ivory Ink. Crafted with intention.</small></footer>
  </main>;
}
