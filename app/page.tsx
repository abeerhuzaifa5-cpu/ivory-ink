const artworks = [
  { src: "/calligraphy/divine-gold.svg", alt: "Allah gold calligraphy", className: "artOne" },
  { src: "/calligraphy/muhammad.svg", alt: "Muhammad calligraphy", className: "artTwo" },
  { src: "/calligraphy/noor.svg", alt: "Noor calligraphy", className: "artThree" },
  { src: "/calligraphy/bismillah.svg", alt: "Bismillah calligraphy", className: "artFour" },
  { src: "/calligraphy/alhamdulillah.svg", alt: "Alhamdulillah calligraphy", className: "artFive" },
];

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="miniBrand" href="#" aria-label="Ivory Ink home"><span>II</span><b>Ivory Ink</b></a>
      <div className="navLinks"><a href="#gallery">Gallery</a><a href="#about">Our Story</a><a href="#contact">Contact</a></div>
    </nav>
    <section className="hero">
      <div className="glow" />
      <div className="orbitStage" aria-label="Five gold calligraphy artworks orbit around Ivory Ink">
        <div className="ring ringOne" /><div className="ring ringTwo" /><div className="ring ringThree" />
        {artworks.map((art) => <div key={art.src} className={`orbitArt ${art.className}`}><img src={art.src} alt={art.alt} /></div>)}
        <div className="brandCenter">
          <span className="eyebrow">FINE ART STUDIO</span>
          <h1>Ivory <em>Ink</em></h1>
          <span className="ornament"><i /> ✧ <i /></span>
          <p>MINIMALIST MARKS · TIMELESS CALLIGRAPHY</p>
        </div>
      </div>
      <a className="cta" href="#gallery">Explore the collection <span>↗</span></a>
      <span className="heroFoot">ART WITH MEANING · MADE TO BE TREASURED</span>
    </section>
    <section className="gallery" id="gallery">
      <div className="sectionIntro"><span className="eyebrow">THE ART COLLECTION</span><h2>Beauty in every <em>stroke.</em></h2><p>Thoughtfully composed calligraphy, where heritage meets a modern, understated elegance.</p></div>
      <div className="galleryGrid">{artworks.map((art, i) => <article className="galleryCard" key={art.src}><img src={art.src} alt={art.alt}/><span>0{i+1} / SIGNATURE ART</span></article>)}</div>
    </section>
    <section className="about" id="about"><span className="eyebrow">OUR PHILOSOPHY</span><h2>Meaningful words.<br/><em>Beautifully framed.</em></h2><p>Ivory Ink celebrates the grace of calligraphy through thoughtful detail, warm ivory tones and timeless gold accents.</p><a className="cta" href="#contact">Make it yours <span>↗</span></a></section>
    <footer id="contact"><a className="footerBrand" href="#">Ivory <em>Ink</em></a><span>MINIMALIST MARKS</span><a href="https://wa.me/923294408631" target="_blank" rel="noreferrer">Discuss a custom piece ↗</a><small>© {new Date().getFullYear()} Ivory Ink. Crafted with intention.</small></footer>
  </main>;
}
