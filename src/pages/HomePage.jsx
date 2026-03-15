import { useEffect, useMemo, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { countProducts, listProductsPage } from '../firebase/products';
import laserImage from '../pic/laser.png';
import loloImage from '../pic/lolo.png';
import nerImage from '../pic/ner.png';

const PAGE_SIZE = 20;

const spotlightSlides = [
  {
    id: 'lolo',
    image: loloImage,
    text:
      'A siker 3 titka:\nSzorgalom\nMunka\nkitartás\n...vagy egy jó helyen lévő ismerős.\nHa most felhúztad magad, ez a tábla neked való.'
  },
  {
    id: 'ner',
    image: nerImage,
    text:
      'Néha úgy érzem magam mintha a GTA 6 magyar DLC-jében lennénk.Repülő a levegőben, pénzkötegek mindenhol, Parlament a háttérben….és persze a karakterek akiket mindenki felismer.\n\nEz a tábla egy kis fricska a valóságnak GTA stílusban lézergravírozva fába.\nHa szereted a mémeket a GTA hangulatot vagy csak kell valami ami garantáltan beszédtéma lesz a faladon akkor ez neked készült.\n\nHa neked is bejön ez a „magyar GTA” vibe\nakkor ezt a táblát neked találták ki.'
  }
];

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function writeCart(items) {
  localStorage.setItem('cart_items', JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart-updated'));
}

function parsePriceInput(value) {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function getVisiblePages(currentPage, totalPages, maxButtons = 7) {
  if (totalPages <= maxButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + maxButtons - 1);

  if (end - start + 1 < maxButtons) {
    start = Math.max(1, end - maxButtons + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [searchText, setSearchText] = useState('');
  const [minPriceText, setMinPriceText] = useState('');
  const [maxPriceText, setMaxPriceText] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [spotlightTransitionEnabled, setSpotlightTransitionEnabled] = useState(true);

  const pageCursorRef = useRef(new Map([[1, null]]));

  const minPrice = parsePriceInput(minPriceText);
  const maxPrice = parsePriceInput(maxPriceText);

  useEffect(() => {
    pageCursorRef.current = new Map([[1, null]]);
    setCurrentPage(1);
  }, [minPrice, maxPrice, sortDirection]);

  useEffect(() => {
    let isCancelled = false;

    async function loadCount() {
      try {
        const total = await countProducts({ minPrice, maxPrice });
        if (isCancelled) return;

        const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
        setTotalPages(pageCount);
      } catch (err) {
        if (isCancelled) return;
        setError('Nem sikerült a termékek darabszámát lekérni.');
        console.error(err);
      }
    }

    void loadCount();

    return () => {
      isCancelled = true;
    };
  }, [minPrice, maxPrice]);

  useEffect(() => {
    let isCancelled = false;

    async function ensureCursorForPage(targetPage) {
      if (targetPage <= 1) return null;

      for (let page = 1; page < targetPage; page += 1) {
        if (!pageCursorRef.current.has(page + 1)) {
          const afterDoc = pageCursorRef.current.get(page) || null;
          const { lastDoc } = await listProductsPage({
            pageSize: PAGE_SIZE,
            afterDoc,
            minPrice,
            maxPrice,
            sortDirection
          });

          pageCursorRef.current.set(page + 1, lastDoc || null);

          if (!lastDoc) break;
        }
      }

      return pageCursorRef.current.get(targetPage) || null;
    }

    async function loadProductsPage() {
      setLoading(true);
      setError('');

      try {
        const afterDoc = await ensureCursorForPage(currentPage);
        if (isCancelled) return;

        const { items, lastDoc } = await listProductsPage({
          pageSize: PAGE_SIZE,
          afterDoc,
          minPrice,
          maxPrice,
          sortDirection
        });

        if (isCancelled) return;

        setProducts(items);
        pageCursorRef.current.set(currentPage + 1, lastDoc || null);
      } catch (err) {
        if (isCancelled) return;
        setError('Nem sikerült betölteni a termékeket. Ellenőrizd a Firestore indexeket és szabályokat.');
        console.error(err);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    void loadProductsPage();

    return () => {
      isCancelled = true;
    };
  }, [currentPage, minPrice, maxPrice, sortDirection]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchText.trim().toLowerCase();
    if (!term) return products;

    return products.filter((product) => {
      const text = `${product.name || ''} ${product.shortDescription || ''} ${product.description || ''}`.toLowerCase();
      return text.includes(term);
    });
  }, [products, searchText]);

  const visiblePages = useMemo(
    () => getVisiblePages(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const spotlightCarouselItems = useMemo(
    () => [...spotlightSlides, spotlightSlides[0]],
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => prev + 1);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);


  function handleAddToCart(product) {
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrls?.[0],
        quantity: 1
      });
    }
    writeCart(cart);
    window.dispatchEvent(new CustomEvent('app-toast', { detail: { message: 'Termék kosárba téve.' } }));
  }

  function scrollToProducts(event) {
    event.preventDefault();
    const target = document.getElementById('home-products');
    if (!target) return;

    const navOffset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function scrollToSpotlight(event) {
    event.preventDefault();
    const target = document.getElementById('home-spotlight');
    if (!target) return;

    const navOffset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSpotlightTransitionEnd() {
    if (!spotlightTransitionEnabled) return;
    if (spotlightIndex !== spotlightSlides.length) return;

    setSpotlightTransitionEnabled(false);
    setSpotlightIndex(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setSpotlightTransitionEnabled(true);
      });
    });
  }

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy">
            <h1>s420 Laser engraving</h1>
            <p>
              Nálunk a gravírozás nem dísz hanem karakter. Olyan darabokat csinálunk amitől azonnal azt érzed, na ez nagyon én vagyok.
            </p>
            <div className="hero-cta-row">
              <a href="#home-products" className="hero-cta neon-hover" onClick={scrollToProducts}>Termékek</a>
              <a href="#home-spotlight" className="hero-cta neon-hover" onClick={scrollToSpotlight}>Legmenőbb termékeink</a>
            </div>
          </div>
          <div className="hero-media">
            <img src={laserImage} alt="Laser engraving" />
          </div>
        </div>
      </section>

      <section id="home-spotlight" className="spotlight-section">
        <div className="spotlight-copy">
          <h2>Legmenőbb termékeink:</h2>
          <div className="spotlight-body">
            <div className="spotlight-copy-clip">
              <div className="spotlight-copy-viewport">
                <div
                  className="spotlight-copy-track"
                  style={{
                    transform: `translateX(-${spotlightIndex * 100}%)`,
                    transition: spotlightTransitionEnabled ? 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
                  }}
                  onTransitionEnd={handleSpotlightTransitionEnd}
                >
                  {spotlightCarouselItems.map((slide, index) => (
                    <article className="spotlight-copy-slide" key={`${slide.id}-${index}`}>
                      <p>{slide.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <a href="#home-products" className="hero-cta neon-hover spotlight-cta" onClick={scrollToProducts}>Termékek</a>
          </div>
        </div>
        <div className="spotlight-media">
          <div className="spotlight-media-viewport">
            <div
              className="spotlight-media-track"
              style={{
                transform: `translateX(-${spotlightIndex * 100}%)`,
                transition: spotlightTransitionEnabled ? 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
              }}
            >
              {spotlightCarouselItems.map((slide, index) => (
                <figure className="spotlight-media-slide" key={`media-${slide.id}-${index}`}>
                  <img src={slide.image} alt="Legmenőbb termék" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="home-products" className="home-content">
        <h1>Lézergravírozott termékek</h1>
        <p className="lead">Kész termékek és egyedi gravírozás vállalása rövid határidővel. <br /> Regisztárolknak az első rendelés 5% kedvezménnyel jár!</p>

        <div className="products-toolbar">
          <label className="toolbar-field">
            <span>Keresés</span>
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Terméknév vagy leírás"
            />
          </label>

          <label className="toolbar-field small">
            <span>Ár tól (Ft)</span>
            <input
              type="number"
              min="0"
              value={minPriceText}
              onChange={(event) => setMinPriceText(event.target.value)}
              placeholder="Pl. 5000"
            />
          </label>

          <label className="toolbar-field small">
            <span>Ár ig (Ft)</span>
            <input
              type="number"
              min="0"
              value={maxPriceText}
              onChange={(event) => setMaxPriceText(event.target.value)}
              placeholder="Pl. 25000"
            />
          </label>

          <label className="toolbar-field small">
            <span>Rendezés</span>
            <select value={sortDirection} onChange={(event) => setSortDirection(event.target.value)}>
              <option value="asc">Ár szerint növekvő</option>
              <option value="desc">Ár szerint csökkenő</option>
            </select>
          </label>
        </div>

        {loading && <p>Töltés...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p>Nincs a szűrésnek megfelelő termék.</p>
        )}

        {!loading && !error && filteredProducts.length === 0 && products.length > 0 && (
          <p>A keresés nem adott találatot ezen az oldalon.</p>
        )}

        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>

        {!loading && !error && totalPages > 1 && (
          <div className="pagination">
            <button
              className="btn secondary"
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Előző
            </button>

            <div className="pagination-pages">
              {visiblePages.map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`page-btn ${page === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="btn secondary"
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Következő
            </button>
          </div>
        )}
      </section>

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn neon-hover"
          onClick={scrollToTop}
          aria-label="Vissza az oldal tetejére"
          title="Vissza az oldal tetejére"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default HomePage;

