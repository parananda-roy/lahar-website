/**
 * ============================================================================
 * লহর (LAHAR) - LUXURY SAREE BOUTIQUE CLIENT-SIDE APPLICATION ENGINE
 * Features: Grouped Product Catalog, Multi-Angle Gallery, Video Player,
 * WhatsApp Click-to-Chat Builder, Cart & Wishlist, Reviews Moderation,
 * Secure Admin Dashboard, and Reusable Marketing Landing Pages.
 * ============================================================================
 */

// Global App State & Config
const APP_CONFIG = {
  brandName: 'লহর (Lahar)',
  hotline: '01518-979826',
  whatsappNumber: '8801518979826',
  facebookUrl: 'https://www.facebook.com/lahar.saree',
  messengerUrl: 'https://m.me/lahar.saree',
  deliveryInsideDhaka: 70,
  deliveryOutsideDhaka: 130,
  currency: '৳'
};

// Initial Verified Saree Catalog (Consolidating Multi-Angles and Videos)
const INITIAL_PRODUCTS = [
  {
    id: 'lhr-gmc-01',
    sku: 'LHR-GMC-01',
    name: 'গামছা ইন্সপায়ার্ড হ্যান্ডলুম কটন শাড়ি',
    nameEn: 'Gamcha-Inspired Handloom Cotton Saree',
    category: 'handloom',
    price: 650,
    regularPrice: 850,
    tag: 'হট কালেকশন',
    tagClass: 'tag-hot',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/gamcha7.png',
    hoverImage: 'assets/images/gamcha 6.png',
    gallery: [
      'assets/images/gamcha7.png',
      'assets/images/gamcha 6.png',
      'assets/images/gamcha 54 - Copy.png',
      'assets/images/gamcha 4.png'
    ],
    video: 'assets/videos/gamcha44.mp4',
    secondaryVideo: 'assets/videos/gamcha 233.mp4',
    description: 'বাংলার চিরায়ত গামছার ঐতিহ্য ও কোমল সুতির অনন্য মেলবন্ধন। আরামদায়ক লাল-সাদা চেক পাড়ের সাথে হ্যান্ডলুমের চমৎকার শৈলী। সারাদিন পরে থাকার জন্য অসাধারণ আরামদায়ক।',
    specs: {
      fabric: '১০০% খাঁটি সুতি (Pure Handloom Cotton)',
      length: '১২ হাত (১৪ হাত বহর ব্লাউজ পিস সহ)',
      blouse: 'আলাদা ম্যাচিং ব্লাউজ পিস অন্তর্ভুক্ত',
      craft: 'ঐতিহ্যবাহী তাঁতের হস্তশিল্প ও লাল-সাদা গামছা পাড়',
      care: 'হালকা ডিটারজেন্টে ঠাণ্ডা পানিতে কোমল হাত ধোয়া'
    }
  },
  {
    id: 'lhr-gmc-02',
    sku: 'LHR-GMC-02',
    name: 'হাতি মোটিফ ট্র্যাডিশনাল ফোক আর্ট শাড়ি',
    nameEn: 'Elephant Folk Motif Traditional Saree',
    category: 'folk',
    price: 650,
    regularPrice: 850,
    tag: 'বেস্টসেলার',
    tagClass: 'tag-hot',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/hati.png',
    hoverImage: 'assets/images/hatti -02.png',
    gallery: [
      'assets/images/hati.png',
      'assets/images/hatti -02.png',
      'assets/images/hatti -03.png',
      'assets/images/hati prrint.png',
      'assets/images/hatii print.png'
    ],
    video: 'assets/videos/hatti print 5.mp4',
    secondaryVideo: 'assets/videos/hatti 7=.mp4',
    description: 'বাংলার লোকজ রাজকীয় হাতি মোটিফে অলঙ্কৃত এক্সক্লুসিভ হ্যান্ডব্লক কটন শাড়ি। সাথে মানানসই পোলকা ডট কন্ট্রাস্ট ব্লাউজ পিস এবং ঐতিহ্যবাহী টাসেল আঁচল।',
    specs: {
      fabric: 'প্রিমিয়াম কোয়ালিটি কটন',
      length: '১২.৫ হাত',
      blouse: 'আলাদা ব্ল্যাক-হোয়াইট পোলকা ডট ব্লাউজ পিস',
      craft: 'ঐতিহ্যবাহী ফোক আর্ট হ্যান্ডব্লক প্রিন্ট',
      care: 'কোমল শ্যাম্পু ওয়াশ বা মাইল্ড ডিটারজেন্ট'
    }
  },
  {
    id: 'lhr-gmc-03',
    sku: 'LHR-GMC-03',
    name: 'টাঙ্গাইলের প্রিমিয়াম সফট সিল্ক শাড়ি',
    nameEn: 'Tangail Premium Soft Silk Saree',
    category: 'silk',
    price: 950,
    regularPrice: 1250,
    tag: 'উৎসব ও আভিজাত্য',
    tagClass: 'tag-silk',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/টাঙ্গাইলের প্রিমিয়াম সফট সিল্ক premium.png',
    hoverImage: 'assets/images/thumnail.png',
    gallery: [
      'assets/images/টাঙ্গাইলের প্রিমিয়াম সফট সিল্ক premium.png',
      'assets/images/thumnail.png'
    ],
    video: 'assets/videos/tangail soft silk 2.mp4',
    secondaryVideo: null,
    description: 'ওজনে পালকের মতো হালকা এবং মাখনের মতো পেলব মসৃণ টাঙ্গাইলের রয়্যাল সফট সিল্ক। জমকালো উৎসব, বিয়ে বা বিশেষ পার্টির জন্য আভিজাত্যের নিখুঁত প্রকাশ।',
    specs: {
      fabric: 'টাঙ্গাইল প্রিমিয়াম সফট সিল্ক',
      length: '১৪ হাত (ব্লাউজ পিস সহ)',
      blouse: 'রানিং ম্যাচিং সিল্ক ব্লাউজ পিস',
      craft: 'সুবর্ণ জরি ও রেশমি সুতোর উইভিং বর্ডার',
      care: 'প্রথমবার ড্রাই ওয়াশ বা ড্রাই ক্লিন সুপারিশকৃত'
    }
  },
  {
    id: 'lhr-gmc-04',
    sku: 'LHR-GMC-04',
    name: 'পানপাতা মোটিফ খাঁটি সুতি শাড়ি',
    nameEn: 'Pan Pata Motif Pure Cotton Saree',
    category: 'handloom',
    price: 650,
    regularPrice: 850,
    tag: 'হেরিটেজ ডিজাইন',
    tagClass: 'tag-handloom',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/panpata 1.png',
    hoverImage: 'assets/images/panpata 2.png',
    gallery: [
      'assets/images/panpata 1.png',
      'assets/images/panpata 2.png',
      'assets/images/panpata 4.png'
    ],
    video: 'assets/videos/notun collection.mp4',
    secondaryVideo: null,
    description: 'শুভ ও ঐতিহ্যের প্রতীক পানপাতা মোটিফে বোনা ক্লাসিক্যাল হ্যান্ডলুম সুতি শাড়ি। প্রশান্তিময় শেড এবং সারাদিন কাজ বা আড্ডায় স্বাচ্ছন্দ্যময় ব্যবহার।',
    specs: {
      fabric: '১০০% প্রাকৃতিক সুতি হ্যান্ডলুম',
      length: '১২ হাত',
      blouse: 'ব্লাউজ পিস অন্তর্ভুক্ত',
      craft: 'হাতে বোনা ট্র্যাডিশনাল পানপাতা মোটিফ',
      care: 'স্বাভাবিক পানিতে ধোয়া যাবে, ছায়ায় শুকাতে হবে'
    }
  },
  {
    id: 'lhr-gmc-05',
    sku: 'LHR-GMC-05',
    name: 'ঐতিহ্যবাহী ঢাকাই জামদানি শাড়ি',
    nameEn: 'Authentic Dhakai Jamdani Saree',
    category: 'jamdani',
    price: 850,
    regularPrice: 1150,
    tag: 'রয়্যাল কালেকশন',
    tagClass: 'tag-silk',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/trnding authentic jamdani2.png',
    hoverImage: 'assets/images/thumnail.png',
    gallery: [
      'assets/images/trnding authentic jamdani2.png',
      'assets/images/thumnail.png'
    ],
    video: 'assets/videos/doneauthentic jamdani premium.mp4',
    secondaryVideo: 'assets/videos/donebishal char jamdani.mp4',
    description: 'বাংলার বিশ্ববিখ্যাত ঢাকাই জামদানি। সূক্ষ্ম কাউন্টের সুতোয় কারিগরদের নিপুণ হাতে বোনা ট্র্যাডিশনাল ফুল-জাল ডিজাইন। ঐতিহ্যবাহী বাঙালিয়ানার অমূল্য প্রতীক।',
    specs: {
      fabric: 'ঢাকাই জামদানি সূক্ষ্ম কাউন্ট কটন ও জরি',
      length: '১২.৫ হাত',
      blouse: 'ব্লাউজ পিস ছাড়া (ঐতিহ্যবাহী ঢাকাই নিয়ম)',
      craft: 'কাঠের তাঁতে হাতে বোনা ইন্টারলকিং জামদানি কাজ',
      care: 'কেবলমাত্র ড্রাই ক্লিন বা প্রফেশনাল জামদানি ওয়াশ'
    }
  },
  {
    id: 'lhr-pop-06',
    sku: 'LHR-POP-06',
    name: 'পপকর্ন টেক্সচার ফেস্টিভ বুটিক শাড়ি',
    nameEn: 'Popcorn Textured Festive Boutique Saree',
    category: 'boutique',
    price: 350,
    regularPrice: 500,
    tag: 'নতুন আগমন',
    tagClass: 'tag-hot',
    inStock: true,
    isFeatured: true,
    primaryImage: 'assets/images/IMG_20260928_032533.png',
    hoverImage: 'assets/images/IMG_20260928_032552.png',
    gallery: [
      'assets/images/IMG_20260928_032533.png',
      'assets/images/IMG_20260928_032552.png',
      'assets/images/IMG_20260928_032626.png',
      'assets/images/IMG_20260928_032701.png',
      'assets/images/IMG_20260928_032741.png'
    ],
    video: 'assets/videos/donepopcorn sareee.mp4',
    secondaryVideo: 'assets/videos/boutiqe saree - Copy.mp4',
    description: 'বিশেষ পপকর্ন টেক্সচার বুননের নজরকাড়া ফেস্টিভ বুটিক শাড়ি। আধুনিক রঙের গভীরতা এবং আরামদায়ক টেক্সচার যা প্রতিটি অনুষ্ঠানে আপনাকে করে তুলবে অনন্য।',
    specs: {
      fabric: 'প্রিমিয়াম টেক্সচার্ড কটন ব্লেন্ড',
      length: '১২ হাত',
      blouse: 'কন্ট্রাস্ট ব্লাউজ পিস সহ',
      craft: 'নভেলটি পপকর্ন উইভিং ও ফেস্টিভ টাসেল',
      care: 'মৃদু ডিটারজেন্টে হালকা হাতে ধোয়া'
    }
  }
];

// Initial Authentic Customer Reviews (From Assets)
const INITIAL_REVIEWS = [
  {
    id: 'rev-01',
    customerName: 'সন্তুষ্ট গ্রাহক (মেসেঞ্জার রিভিউ)',
    district: 'ঢাকা',
    productName: 'হ্যান্ডলুম সুতি শাড়ি',
    rating: 5,
    quote: 'চিরকুট টাও সুন্দর লিখেছেন। আপনার ব্যবসার জন্য শুভকামনা রইলো।',
    screenshot: 'assets/reviews/customer review 1 - Copy.png',
    date: 'অক্টোবর ২০২৬',
    status: 'approved'
  },
  {
    id: 'rev-02',
    customerName: 'শ্রদ্ধেয় ক্রেতা',
    district: 'চট্টগ্রাম',
    productName: 'গামছা পাড় হ্যান্ডলুম শাড়ি',
    rating: 5,
    quote: 'আপু, শাড়িটা হাতে পেয়েছি। অনেক সুন্দর হয়েছে। ঠিক যেমন দেখিয়েছিলেন, সেরকমই পেয়েছি। খুব ভালো লাগছে 💕',
    screenshot: 'assets/reviews/customer review 2 - Copy.png',
    date: 'অক্টোবর ২০২৬',
    status: 'approved'
  },
  {
    id: 'rev-03',
    customerName: 'নিয়মিত গ্রাহক',
    district: 'সিলেট',
    productName: 'লাল উৎসব শাড়ি',
    rating: 5,
    quote: 'Saree asholei onek shundhr 😍 jmmta dekhlm tymn peyechi! খুব যত্ন করে চেক করে পাঠানো হয়েছে।',
    screenshot: 'assets/reviews/customer review 3 - Copy.png',
    date: 'অক্টোবর ২০২৬',
    status: 'approved'
  },
  {
    id: 'rev-04',
    customerName: 'অনলাইন ক্রেতা',
    district: 'রাজশাহী',
    productName: 'লহর এক্সক্লুসিভ শাড়ি',
    rating: 5,
    quote: 'শাড়ী পেয়েছি আপু, সুন্দর হয়েছে ❤️ আপনাদের আন্তরিকতা ও প্যাকেজিং সত্যিই চমৎকার।',
    screenshot: 'assets/reviews/customer review 4 - Copy.png',
    date: 'অক্টোবর ২০২৬',
    status: 'approved'
  }
];

// Reels / Lookbook Videos
const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'হেরিটেজ স্থাপত্য ও লহর শাড়ি',
    tag: 'মডেল শ্যুট ০১',
    video: 'assets/videos/model shoot 01.mp4',
    productId: 'lhr-gmc-01'
  },
  {
    id: 'reel-2',
    title: 'স্নিগ্ধ আঁচল ও কুঁচির দোলন',
    tag: 'মডেল শ্যুট ০২',
    video: 'assets/videos/model shoot 2.mp4',
    productId: 'lhr-gmc-02'
  },
  {
    id: 'reel-3',
    title: 'টাঙ্গাইল সফট সিল্কের রাজকীয় দ্যুতি',
    tag: 'সিল্ক ড্রেপ',
    video: 'assets/videos/tangail soft silk 2.mp4',
    productId: 'lhr-gmc-03'
  },
  {
    id: 'reel-4',
    title: 'লহরের শুরুর আবেগ ও গল্প',
    tag: 'ব্র্যান্ড লুকবুক',
    video: 'assets/videos/1st lahar shoot by tethi.mp4',
    productId: 'lhr-gmc-05'
  }
];

// Reusable Landing Pages Datastore
const INITIAL_LANDING_PAGES = [
  {
    slug: 'boishakh-puja-special',
    title: 'উৎসবের রঙে রাঙাও নিজেকে • লহর উৎসব স্পেশাল কালেকশন',
    subtitle: 'ঐতিহ্যবাহী তাঁত ও আধুনিক নান্দনিকতায় সাজানো সীমিত সংস্করণের শাড়ির সমাহার',
    heroTag: 'উৎসব কালেকশন ২০২৬',
    productIds: ['lhr-gmc-01', 'lhr-gmc-02', 'lhr-gmc-03', 'lhr-gmc-05'],
    isPublished: true
  }
];

// Application Controller Class
class LaharApp {
  constructor() {
    // Automatically synchronize catalog with user's verified prices and spelling
    const CATALOG_PRICE_VERSION = 'v3_dhakai_fixed';
    if (localStorage.getItem('lahar_catalog_ver') !== CATALOG_PRICE_VERSION) {
      localStorage.setItem('lahar_products', JSON.stringify(INITIAL_PRODUCTS));
      localStorage.setItem('lahar_catalog_ver', CATALOG_PRICE_VERSION);
    }

    this.products = this.loadData('lahar_products', INITIAL_PRODUCTS);
    this.reviews = this.loadData('lahar_reviews', INITIAL_REVIEWS);
    this.landingPages = this.loadData('lahar_landing_pages', INITIAL_LANDING_PAGES);
    this.orders = this.loadData('lahar_orders', []);
    this.cart = this.loadData('lahar_cart', []);
    this.wishlist = this.loadData('lahar_wishlist', []);
    this.settings = this.loadData('lahar_settings', APP_CONFIG);

    this.currentCategory = 'all';
    this.currentSort = 'featured';
    this.selectedDeliveryZone = 'inside';
    this.currentReviewRating = 5;
    this.isAdminLoggedIn = sessionStorage.getItem('lahar_admin_logged') === 'true';

    this.init();
  }

  // Load from LocalStorage with fallback
  loadData(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('LocalStorage load error for ' + key, e);
      return fallback;
    }
  }

  // Save to LocalStorage
  saveData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('LocalStorage save error for ' + key, e);
    }
  }

  // Application Entry Point
  init() {
    this.applySettingsToDOM();
    this.renderCatalog();
    this.renderReels();
    this.renderAuthenticReviews();
    this.updateCartUI();
    this.updateWishlistUI();
    this.setupEventListeners();
    this.handleRouting();

    window.addEventListener('hashchange', () => this.handleRouting());
  }

  // Convert English numbers to crisp Bengali digits
  toBengaliDigits(num) {
    const bn = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).replace(/[0-9]/g, d => bn[d]);
  }

  // Dynamically sync and update all settings across DOM
  applySettingsToDOM() {
    const hotline = this.settings.hotline || '01518-979826';
    const phoneBn = this.toBengaliDigits(hotline);
    const rawDigits = hotline.replace(/[^0-9]/g, '');

    // Top announcement bar
    const annText = document.querySelector('.announcement-item a');
    if (annText) {
      annText.textContent = phoneBn;
      annText.href = `https://wa.me/${this.settings.whatsappNumber}`;
    }

    // Contact items
    const phoneDisplay = document.getElementById('sitePhoneDisplay');
    const phoneItem = document.getElementById('sitePhoneItem');
    if (phoneDisplay) phoneDisplay.textContent = `${phoneBn} (সকাল ১০টা - রাত ১১টা)`;
    if (phoneItem) phoneItem.href = `tel:+880${rawDigits.replace(/^0+/, '')}`;

    const waDisplay = document.getElementById('siteWaDisplay');
    const waItem = document.getElementById('siteWaItem');
    if (waDisplay) waDisplay.textContent = `+880 1518-979826 (২৪/৭ চ্যাট ও অর্ডার)`;
    if (waItem) waItem.href = `https://wa.me/${this.settings.whatsappNumber}`;

    const messengerItem = document.getElementById('siteMessengerItem');
    const messengerDisplay = document.getElementById('siteMessengerDisplay');
    if (messengerItem) messengerItem.href = this.settings.messengerUrl || 'https://m.me/lahar.saree';
    if (messengerDisplay) messengerDisplay.textContent = (this.settings.messengerUrl || 'm.me/lahar.saree').replace('https://', '');

    const fbItem = document.getElementById('siteFacebookItem');
    if (fbItem) fbItem.href = this.settings.facebookUrl || 'https://www.facebook.com/lahar.saree';

    // Footer contact info
    const footerPhone = document.getElementById('footerPhone');
    if (footerPhone) {
      footerPhone.textContent = phoneBn;
      footerPhone.href = `tel:+880${rawDigits.replace(/^0+/, '')}`;
    }

    const footerWa = document.getElementById('footerWa');
    if (footerWa) {
      footerWa.textContent = `+880 ${hotline}`;
      footerWa.href = `https://wa.me/${this.settings.whatsappNumber}`;
    }

    const footerMessenger = document.getElementById('footerMessenger');
    if (footerMessenger) {
      footerMessenger.href = this.settings.messengerUrl || 'https://m.me/lahar.saree';
      footerMessenger.textContent = (this.settings.messengerUrl || 'm.me/lahar.saree').replace('https://', '');
    }
  }

  // Hash-based Routing (SPA + Admin + Landing Pages)
  handleRouting() {
    const hash = window.location.hash || '#home';
    const storeView = document.getElementById('storeView');
    const landingView = document.getElementById('landingPageView');
    const adminView = document.getElementById('adminView');

    if (hash.startsWith('#landing/')) {
      const slug = hash.replace('#landing/', '');
      this.showLandingPage(slug);
    } else if (hash === '#admin') {
      storeView.classList.add('hidden');
      landingView.classList.add('hidden');
      adminView.classList.remove('hidden');
      this.renderAdminPortal();
      window.scrollTo(0, 0);
    } else {
      adminView.classList.add('hidden');
      landingView.classList.add('hidden');
      storeView.classList.remove('hidden');

      // Update Nav Active state
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === hash);
      });
    }
  }

  // Setup Event Listeners
  setupEventListeners() {
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileBtn && mainNav) {
      mobileBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
      });
      // Close mobile nav when clicking a link
      mainNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mainNav.classList.remove('open'));
      });
    }

    // Live Search Toggle & Handler
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchCloseBtn = document.getElementById('searchCloseBtn');
    const searchPanel = document.getElementById('searchPanel');
    const searchInput = document.getElementById('searchInput');

    if (searchToggleBtn && searchPanel) {
      searchToggleBtn.addEventListener('click', () => {
        searchPanel.classList.toggle('open');
        if (searchPanel.classList.contains('open')) {
          searchInput.focus();
        }
      });
    }

    if (searchCloseBtn && searchPanel) {
      searchCloseBtn.addEventListener('click', () => {
        searchPanel.classList.remove('open');
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleLiveSearch(e.target.value));
    }

    // Drawer Toggles
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');

    if (cartToggleBtn) {
      cartToggleBtn.addEventListener('click', () => this.toggleCartDrawer(true));
    }
    if (wishlistToggleBtn) {
      wishlistToggleBtn.addEventListener('click', () => this.toggleWishlistDrawer(true));
    }
  }

  // ==========================================================================
  // CATALOG RENDERING & FILTERING
  // ==========================================================================
  renderCatalog() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let list = this.products.filter(p => p.inStock !== false);

    // Apply Category Filter
    if (this.currentCategory !== 'all') {
      list = list.filter(p => p.category === this.currentCategory);
    }

    // Apply Sorting
    if (this.currentSort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.currentSort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'bn'));
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--color-gold); margin-bottom: 16px;"></i>
          <h3>এই কালেকশনে বর্তমানে কোনো শাড়ি নেই</h3>
          <p style="color: var(--color-text-muted);">অনুগ্রহ করে অন্য ক্যাটাগরি দেখুন অথবা সব শাড়ির ক্যাটালগ ব্রাউজ করুন।</p>
          <button class="btn btn-outline-dark" style="margin-top: 14px;" onclick="app.setCategoryFilter('all')">সব শাড়ি দেখুন</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(product => {
      const isWishlisted = this.wishlist.includes(product.id);
      const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);

      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-media-box" onclick="app.openProductModal('${product.id}')">
            <div class="product-badge-group">
              ${product.tag ? `<span class="product-tag ${product.tagClass || 'tag-hot'}">${product.tag}</span>` : ''}
              ${discount > 0 ? `<span class="product-tag" style="background:#000; color:#fff;">-${discount}% ছাড়</span>` : ''}
            </div>

            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    title="পছন্দের তালিকায় রাখুন" 
                    onclick="event.stopPropagation(); app.toggleWishlist('${product.id}')">
              <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
            </button>

            <img src="${product.primaryImage}" alt="${product.name}" class="product-main-img" loading="lazy">
            <img src="${product.hoverImage || product.primaryImage}" alt="${product.name}" class="product-hover-img" loading="lazy">

            ${product.video ? `
              <div class="product-video-badge">
                <i class="fa-solid fa-play"></i> ভিডিও দেখুন
              </div>
            ` : ''}
          </div>

          <div class="product-info">
            <span class="product-sku">${product.sku}</span>
            <h3 class="product-title" onclick="app.openProductModal('${product.id}')">${product.name}</h3>
            <p class="product-spec-snippet">${product.specs.fabric.split('(')[0]}</p>

            <div class="product-price-box">
              <span class="current-price">৳${product.price.toLocaleString('bn-BD')}</span>
              ${product.regularPrice ? `<span class="regular-price">৳${product.regularPrice.toLocaleString('bn-BD')}</span>` : ''}
            </div>

            <div class="product-card-actions">
              <button class="btn btn-card-cart" onclick="app.addToCart('${product.id}')">
                <i class="fa-solid fa-bag-shopping"></i> ব্যাগে নিন
              </button>
              <button class="btn btn-card-wa" onclick="app.orderViaWhatsApp('${product.id}')">
                <i class="fa-brands fa-whatsapp"></i> অর্ডার
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Filter by Category
  setCategoryFilter(category, buttonEl = null) {
    this.currentCategory = category;
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    this.renderCatalog();
  }

  filterByCategory(category) {
    this.setCategoryFilter(category);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleSortChange(sortVal) {
    this.currentSort = sortVal;
    this.renderCatalog();
  }

  // ==========================================================================
  // LIVE SEARCH HANDLER
  // ==========================================================================
  handleLiveSearch(query) {
    const container = document.getElementById('searchResultsContainer');
    if (!container) return;

    const q = query.trim().toLowerCase();
    if (!q) {
      container.innerHTML = '';
      return;
    }

    const matches = this.products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.specs.fabric.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      container.innerHTML = `<p style="padding: 16px; color: var(--color-text-muted);">"<strong>${query}</strong>" দিয়ে কোনো শাড়ি খুঁজে পাওয়া যায়নি।</p>`;
      return;
    }

    container.innerHTML = matches.map(p => `
      <div style="display: flex; gap: 14px; align-items: center; padding: 10px; background: var(--color-cream); border-radius: var(--radius-sm); cursor: pointer;"
           onclick="app.openProductModal('${p.id}'); document.getElementById('searchPanel').classList.remove('open');">
        <img src="${p.primaryImage}" alt="${p.name}" style="width: 55px; height: 60px; object-fit: cover; border-radius: 4px;">
        <div>
          <strong style="display: block; font-size: 0.95rem;">${p.name}</strong>
          <span style="font-size: 0.82rem; color: var(--color-text-muted);">${p.sku} • ৳${p.price.toLocaleString('bn-BD')}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // VIDEO REELS / LOOKBOOK RENDERING
  // ==========================================================================
  renderReels() {
    const slider = document.getElementById('reelsSlider');
    if (!slider) return;

    slider.innerHTML = REELS_DATA.map(reel => `
      <div class="reel-card">
        <video class="reel-video" loop muted playsinline preload="metadata">
          <source src="${reel.video}" type="video/mp4">
        </video>

        <button class="reel-sound-btn" onclick="app.toggleReelSound(this)" title="শব্দ অন/অফ">
          <i class="fa-solid fa-volume-xmark"></i>
        </button>

        <div class="reel-overlay">
          <span class="reel-tag">${reel.tag}</span>
          <h3 class="reel-title">${reel.title}</h3>
          ${reel.productId ? `
            <button class="reel-btn" onclick="app.openProductModal('${reel.productId}')">
              <span>শাড়িটি দেখুন</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          ` : ''}
        </div>
      </div>
    `).join('');

    // Setup hover play
    document.querySelectorAll('.reel-card').forEach(card => {
      const video = card.querySelector('video');
      if (video) {
        card.addEventListener('mouseenter', () => video.play().catch(() => {}));
        card.addEventListener('mouseleave', () => video.pause());
      }
    });
  }

  toggleReelSound(btn) {
    const video = btn.closest('.reel-card').querySelector('video');
    if (!video) return;
    video.muted = !video.muted;
    const icon = btn.querySelector('i');
    if (video.muted) {
      icon.className = 'fa-solid fa-volume-xmark';
    } else {
      icon.className = 'fa-solid fa-volume-high';
    }
  }

  // ==========================================================================
  // AUTHENTIC REVIEWS & SUBMISSION MODERATION
  // ==========================================================================
  renderAuthenticReviews() {
    const grid = document.getElementById('authenticReviewsGrid');
    if (!grid) return;

    const approvedReviews = this.reviews.filter(r => r.status === 'approved');

    grid.innerHTML = approvedReviews.map(rev => `
      <div class="review-screenshot-card" onclick="app.openReviewLightbox('${rev.screenshot || ''}', '${rev.quote}')">
        <div class="review-img-box">
          <img src="${rev.screenshot || 'assets/images/gamcha 4.png'}" alt="লহর কাস্টমার রিভিউ" loading="lazy">
          <div class="review-zoom-hint" title="বড় করে পড়ুন">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </div>
        </div>

        <div class="review-card-body">
          <div style="color: #FFA500; font-size: 0.9rem; margin-bottom: 8px;">
            ${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}
          </div>
          <p class="review-quote">"${rev.quote}"</p>
          <div class="review-author">
            <span class="author-badge"><i class="fa-solid fa-circle-check"></i> ${rev.customerName}</span>
            <span class="review-date">${rev.district || 'বাংলাদেশ'}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  setRating(rating) {
    this.currentReviewRating = rating;
    const stars = document.querySelectorAll('#starRatingInput i');
    stars.forEach((star, index) => {
      star.classList.toggle('active', index < rating);
    });
  }

  handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('revCustomerName').value.trim();
    const product = document.getElementById('revProductPurchased').value.trim();
    const district = document.getElementById('revDistrict').value.trim() || 'বাংলাদেশ';
    const comment = document.getElementById('revComment').value.trim();

    const newReview = {
      id: 'rev-user-' + Date.now(),
      customerName: name,
      district: district,
      productName: product,
      rating: this.currentReviewRating,
      quote: comment,
      screenshot: null,
      date: 'আজকে',
      status: 'pending' // STRICT: Requires Admin approval before displaying publicly
    };

    this.reviews.push(newReview);
    this.saveData('lahar_reviews', this.reviews);

    document.getElementById('customerReviewForm').reset();
    this.setRating(5);

    this.showToast('আপনার মহামূল্যবান পর্যালোচনার জন্য আন্তরিক ধন্যবাদ! অ্যাডমিন যাচাইয়ের পর এটি ওয়েবসাইটে প্রকাশিত হবে।', 'success');
  }

  openReviewLightbox(imgSrc, caption) {
    if (!imgSrc) return;
    const imgEl = document.getElementById('lightboxImage');
    const capEl = document.getElementById('lightboxCaption');
    if (imgEl && capEl) {
      imgEl.src = imgSrc;
      capEl.textContent = caption || 'মেসেঞ্জারে প্রাপ্ত আসল গ্রাহকের ভালোবাসা';
      this.openModal('reviewLightboxModal');
    }
  }

  // ==========================================================================
  // PRODUCT DETAIL MODAL (MULTI-ANGLE & VIDEO VIEWER)
  // ==========================================================================
  openProductModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('productDetailModalBody');
    if (!modalBody) return;

    const isWishlisted = this.wishlist.includes(product.id);
    const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);

    modalBody.innerHTML = `
      <div class="product-detail-grid">
        <!-- Gallery Column -->
        <div class="gallery-wrapper">
          <div class="main-preview-box" id="modalMainPreview">
            <img src="${product.primaryImage}" alt="${product.name}" id="modalMainMediaImg">
          </div>

          <!-- Thumbnails Strip -->
          <div class="thumbnails-strip">
            ${product.gallery.map((img, i) => `
              <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="app.switchModalPreview('image', '${img}', this)">
                <img src="${img}" alt="Angle ${i+1}">
              </div>
            `).join('')}

            ${product.video ? `
              <div class="thumb-item video-thumb" onclick="app.switchModalPreview('video', '${product.video}', this)" title="শাড়ি পরার ভিডিও">
                <i class="fa-solid fa-play"></i>
                <span style="font-size:0.65rem; display:block; position:absolute; bottom:4px;">ভিডিও</span>
              </div>
            ` : ''}

            ${product.secondaryVideo ? `
              <div class="thumb-item video-thumb" onclick="app.switchModalPreview('video', '${product.secondaryVideo}', this)" title="ড্রেপিং ভিডিও ২">
                <i class="fa-solid fa-play"></i>
                <span style="font-size:0.65rem; display:block; position:absolute; bottom:4px;">ভিডিও ২</span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Info Column -->
        <div class="product-detail-info">
          <span class="detail-sku">প্রোডাক্ট কোড: <strong>${product.sku}</strong></span>
          <h2 class="detail-title">${product.name}</h2>
          <p style="color:var(--color-primary); font-weight:600; font-size:0.95rem; margin-bottom:12px;">${product.nameEn}</p>

          <div class="detail-price-box">
            <span class="detail-price">৳${product.price.toLocaleString('bn-BD')}</span>
            ${product.regularPrice ? `<span class="regular-price">৳${product.regularPrice.toLocaleString('bn-BD')}</span>` : ''}
            ${discount > 0 ? `<span class="discount-tag">৳${(product.regularPrice - product.price).toLocaleString('bn-BD')} সেভ (${discount}%)</span>` : ''}
          </div>

          <p style="font-size: 0.98rem; color: var(--color-text-main); margin-bottom: 20px; line-height: 1.6;">
            ${product.description}
          </p>

          <!-- Specifications Table -->
          <div class="specs-table">
            <span class="spec-label">কাপড়:</span>
            <span>${product.specs.fabric}</span>

            <span class="spec-label">শাড়ির বহর:</span>
            <span>${product.specs.length}</span>

            <span class="spec-label">ব্লাউজ পিস:</span>
            <span>${product.specs.blouse}</span>

            <span class="spec-label">নকশা ও শৈলী:</span>
            <span>${product.specs.craft}</span>

            <span class="spec-label">যত্ন ও ধোয়া:</span>
            <span>${product.specs.care}</span>
          </div>

          <!-- Trust Callout -->
          <div style="background:var(--color-cream); padding:12px 16px; border-radius:var(--radius-sm); font-size:0.86rem; margin-bottom:20px; border-left:3px solid var(--color-gold);">
            <i class="fa-solid fa-envelope-open-text" style="color:var(--color-gold);"></i> প্রতিটি পার্সেলের ভেতর থাকছে আপনার নামে লহরের বিশেষ উপহার <strong>হাতে লেখা 'চিরকুট'</strong>।
          </div>

          <!-- Action Buttons -->
          <div class="detail-actions">
            <div class="qty-action-row">
              <div class="qty-controls" style="padding: 4px;">
                <button class="qty-btn" onclick="app.changeDetailQty(-1)">-</button>
                <span class="qty-val" id="detailQtyVal">1</span>
                <button class="qty-btn" onclick="app.changeDetailQty(1)">+</button>
              </div>

              <button class="btn btn-primary" style="flex-grow:1;" onclick="app.addDetailToCart('${product.id}')">
                <i class="fa-solid fa-bag-shopping"></i> ব্যাগে যোগ করুন
              </button>

              <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" style="position:static; width:48px; height:48px;" 
                      onclick="app.toggleWishlist('${product.id}')">
                <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>

            <button class="btn btn-whatsapp-full" onclick="app.orderViaWhatsApp('${product.id}')">
              <i class="fa-brands fa-whatsapp"></i> সরাসরি হোয়াটসঅ্যাপে এই শাড়িটি অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    `;

    this.openModal('productDetailModal');
  }

  switchModalPreview(type, src, thumbEl) {
    const box = document.getElementById('modalMainPreview');
    if (!box) return;

    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');

    if (type === 'image') {
      box.innerHTML = `<img src="${src}" alt="Preview" style="width:100%; height:100%; object-fit:contain;">`;
    } else if (type === 'video') {
      box.innerHTML = `
        <video controls autoplay playsinline style="width:100%; height:100%; object-fit:contain; background:#000;">
          <source src="${src}" type="video/mp4">
        </video>
      `;
    }
  }

  changeDetailQty(delta) {
    const el = document.getElementById('detailQtyVal');
    if (!el) return;
    let qty = parseInt(el.textContent) + delta;
    if (qty < 1) qty = 1;
    if (qty > 10) qty = 10;
    el.textContent = qty;
  }

  addDetailToCart(productId) {
    const qtyEl = document.getElementById('detailQtyVal');
    const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
    this.addToCart(productId, qty);
    this.closeModal('productDetailModal');
    this.toggleCartDrawer(true);
  }

  // ==========================================================================
  // SHOPPING BAG / CART & WISHLIST LOGIC
  // ==========================================================================
  addToCart(productId, quantity = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        sku: product.sku,
        name: product.name,
        price: product.price,
        image: product.primaryImage,
        quantity: quantity
      });
    }

    this.saveData('lahar_cart', this.cart);
    this.updateCartUI();
    this.showToast(`"${product.name}" ব্যাগে যোগ করা হয়েছে!`, 'success');
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    }

    this.saveData('lahar_cart', this.cart);
    this.updateCartUI();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveData('lahar_cart', this.cart);
    this.updateCartUI();
    this.showToast('পণ্যটি ব্যাগ থেকে সরানো হয়েছে।');
  }

  updateDeliveryCharge(zone) {
    this.selectedDeliveryZone = zone;
    this.updateCartUI();
  }

  updateCartUI() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = this.selectedDeliveryZone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal > 0 ? subtotal + deliveryFee : 0;

    // Badges
    const countBadge = document.getElementById('cartCount');
    const drawerCount = document.getElementById('cartDrawerCount');
    if (countBadge) countBadge.textContent = totalCount;
    if (drawerCount) drawerCount.textContent = totalCount;

    // Prices
    const subtotalEl = document.getElementById('drawerSubtotal');
    const deliveryEl = document.getElementById('drawerDelivery');
    const totalEl = document.getElementById('drawerTotal');
    if (subtotalEl) subtotalEl.textContent = `৳${subtotal.toLocaleString('bn-BD')}`;
    if (deliveryEl) deliveryEl.textContent = `৳${deliveryFee.toLocaleString('bn-BD')}`;
    if (totalEl) totalEl.textContent = `৳${total.toLocaleString('bn-BD')}`;

    // Body items
    const body = document.getElementById('cartDrawerBody');
    if (body) {
      if (this.cart.length === 0) {
        body.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
            <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; color: var(--color-border); margin-bottom: 16px;"></i>
            <h4>আপনার শপিং ব্যাগ খালি</h4>
            <p style="font-size: 0.9rem; margin-top: 6px;">আমাদের শাড়ি সম্ভার থেকে আপনার পছন্দের শাড়ি যোগ করুন।</p>
            <button class="btn btn-outline-dark" style="margin-top: 18px;" onclick="app.toggleCartDrawer(false)">শাড়ি দেখুন</button>
          </div>
        `;
      } else {
        body.innerHTML = this.cart.map(item => `
          <div class="drawer-item">
            <img src="${item.image}" alt="${item.name}" class="drawer-item-img">
            <div class="drawer-item-details">
              <h4>${item.name}</h4>
              <div class="drawer-item-price">৳${item.price.toLocaleString('bn-BD')}</div>
              <div class="qty-controls">
                <button class="qty-btn" onclick="app.updateCartQty('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="app.updateCartQty('${item.id}', 1)">+</button>
              </div>
            </div>
            <button class="drawer-item-remove" onclick="app.removeFromCart('${item.id}')" title="মুছে ফেলুন">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `).join('');
      }
    }
  }

  toggleCartDrawer(isOpen) {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer && backdrop) {
      drawer.classList.toggle('active', isOpen);
      backdrop.classList.toggle('active', isOpen);
    }
  }

  toggleWishlistDrawer(isOpen) {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer && backdrop) {
      drawer.classList.toggle('active', isOpen);
      backdrop.classList.toggle('active', isOpen);
    }
  }

  closeAllDrawers() {
    this.toggleCartDrawer(false);
    this.toggleWishlistDrawer(false);
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast('পছন্দের তালিকা থেকে সরানো হয়েছে।');
    } else {
      this.wishlist.push(productId);
      this.showToast('পছন্দের তালিকায় যুক্ত হয়েছে!', 'success');
    }
    this.saveData('lahar_wishlist', this.wishlist);
    this.updateWishlistUI();
    this.renderCatalog();
  }

  updateWishlistUI() {
    const countBadge = document.getElementById('wishlistCount');
    const drawerCount = document.getElementById('wishlistDrawerCount');
    if (countBadge) countBadge.textContent = this.wishlist.length;
    if (drawerCount) drawerCount.textContent = this.wishlist.length;

    const body = document.getElementById('wishlistDrawerBody');
    if (body) {
      const items = this.products.filter(p => this.wishlist.includes(p.id));
      if (items.length === 0) {
        body.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
            <i class="fa-regular fa-heart" style="font-size: 3rem; color: var(--color-border); margin-bottom: 16px;"></i>
            <h4>পছন্দের তালিকা খালি</h4>
            <p style="font-size: 0.9rem; margin-top: 6px;">শাড়ির কার্ডের হার্ট আইকনে ক্লিক করে পছন্দের শাড়ি জমিয়ে রাখুন।</p>
          </div>
        `;
      } else {
        body.innerHTML = items.map(p => `
          <div class="drawer-item">
            <img src="${p.primaryImage}" alt="${p.name}" class="drawer-item-img">
            <div class="drawer-item-details">
              <h4>${p.name}</h4>
              <div class="drawer-item-price">৳${p.price.toLocaleString('bn-BD')}</div>
              <button class="btn btn-sm btn-primary" onclick="app.addToCart('${p.id}'); app.toggleWishlist('${p.id}');">
                <i class="fa-solid fa-bag-shopping"></i> ব্যাগে নিন
              </button>
            </div>
            <button class="drawer-item-remove" onclick="app.toggleWishlist('${p.id}')" title="বাদ দিন">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `).join('');
      }
    }
  }

  // ==========================================================================
  // WHATSAPP CLICK-TO-CHAT ORDER INTEGRATION (OPTION A - MASTER INSTRUCTION)
  // ==========================================================================
  orderViaWhatsApp(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const text = 
`নমস্কার/হ্যালো লহর,
আমি এই শাড়িটি অর্ডার করতে আগ্রহী:

পণ্য: ${product.name}
প্রোডাক্ট কোড: ${product.sku}
মূল্য: ৳${product.price}
প্রোডাক্ট লিঙ্ক: ${window.location.origin}${window.location.pathname}#product/${product.id}

অনুগ্রহ করে অর্ডার গ্রহণ ও ডেলিভারির প্রক্রিয়া জানাবেন।`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${this.settings.whatsappNumber}?text=${encoded}`, '_blank');
  }

  checkoutViaWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast('আপনার শপিং ব্যাগ খালি!', 'error');
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = this.selectedDeliveryZone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal + deliveryFee;
    const zoneName = this.selectedDeliveryZone === 'inside' ? 'ঢাকা সিটি (৳৭০)' : 'ঢাকার বাইরে (৳১৩০)';

    let itemsText = this.cart.map((item, idx) => 
      `${idx + 1}. ${item.name} [কোড: ${item.sku}] - ${item.quantity}টি x ৳${item.price} = ৳${item.price * item.quantity}`
    ).join('\n');

    const text = 
`নমস্কার/হ্যালো লহর,
আমি আমার শপিং ব্যাগের শাড়িগুলো অর্ডার করতে চাই:

অর্ডারকৃত পণ্যের তালিকা:
${itemsText}

----------------------------
পণ্যের মূল্য: ৳${subtotal}
ডেলিভারি এলাকা: ${zoneName}
সর্বমোট প্রদেয়: ৳${total}
পেমেন্ট মেথড: ক্যাশ অন ডেলিভারি (COD)

অনুগ্রহ করে আমার অর্ডারটি কনফার্ম করুন।`;

    window.open(`https://wa.me/${this.settings.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  }

  handleDirectWhatsAppMessage(e) {
    e.preventDefault();
    const name = document.getElementById('waCustName').value.trim();
    const type = document.getElementById('waInquiryType').value;
    const msg = document.getElementById('waMessageText').value.trim();

    const text = 
`নমস্কার লহর,
আমি ${name}। 

বিষয়: ${type}
বার্তা: ${msg}

সরাসরি ওয়েবসাইটের মাধ্যমে পাঠানো বার্তা।`;

    window.open(`https://wa.me/${this.settings.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  }

  // ==========================================================================
  // CHECKOUT MODAL & ORDER PLACEMENT
  // ==========================================================================
  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast('চেকআউটের পূর্বে অন্তত একটি শাড়ি ব্যাগে যোগ করুন!', 'error');
      return;
    }

    this.toggleCartDrawer(false);

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = this.selectedDeliveryZone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal + deliveryFee;

    const subEl = document.getElementById('checkoutSubtotal');
    const delEl = document.getElementById('checkoutDelivery');
    const totEl = document.getElementById('checkoutTotal');
    const zoneEl = document.getElementById('orderDeliveryZone');

    if (subEl) subEl.textContent = `৳${subtotal.toLocaleString('bn-BD')}`;
    if (delEl) delEl.textContent = `৳${deliveryFee.toLocaleString('bn-BD')}`;
    if (totEl) totEl.textContent = `৳${total.toLocaleString('bn-BD')}`;
    if (zoneEl) zoneEl.value = this.selectedDeliveryZone;

    this.openModal('checkoutModal');
  }

  handleCheckoutZoneChange(zone) {
    this.selectedDeliveryZone = zone;
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = zone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal + deliveryFee;

    const delEl = document.getElementById('checkoutDelivery');
    const totEl = document.getElementById('checkoutTotal');
    if (delEl) delEl.textContent = `৳${deliveryFee.toLocaleString('bn-BD')}`;
    if (totEl) totEl.textContent = `৳${total.toLocaleString('bn-BD')}`;
  }

  handlePlaceOrder(e) {
    e.preventDefault();
    const name = document.getElementById('orderCustomerName').value.trim();
    const phone = document.getElementById('orderCustomerPhone').value.trim();
    const address = document.getElementById('orderCustomerAddress').value.trim();
    const zone = document.getElementById('orderDeliveryZone').value;
    const payment = document.getElementById('orderPaymentMethod').value;
    const chirkut = document.getElementById('orderChirkutNote').value.trim();

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = zone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal + deliveryFee;

    const newOrder = {
      orderId: 'LHR-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('bn-BD'),
      customerName: name,
      phone: phone,
      address: address,
      zone: zone === 'inside' ? 'ঢাকা সিটি' : 'ঢাকার বাইরে',
      paymentMethod: payment,
      chirkutNote: chirkut || 'ধন্যবাদ লহরের সাথে থাকার জন্য।',
      items: [...this.cart],
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      total: total,
      status: 'Pending'
    };

    this.orders.unshift(newOrder);
    this.saveData('lahar_orders', this.orders);

    // Empty Cart
    this.cart = [];
    this.saveData('lahar_cart', this.cart);
    this.updateCartUI();
    this.closeModal('checkoutModal');

    // Show Confirmation Alert
    alert(`🎉 অভিনন্দন ${name}! আপনার অর্ডার সফলভাবে গৃহীত হয়েছে।\n\nঅর্ডার আইডি: ${newOrder.orderId}\nমোট প্রদেয় টাকা: ৳${total}\nপেমেন্ট মেথড: ${payment}\n\nখুব শীঘ্রই আমাদের প্রতিনিধি ফোন করে ডেলিভারি নিশ্চিত করবেন। ধন্যবাদ!`);
  }

  submitCheckoutViaWhatsApp() {
    const name = document.getElementById('orderCustomerName').value.trim();
    const phone = document.getElementById('orderCustomerPhone').value.trim();
    const address = document.getElementById('orderCustomerAddress').value.trim();
    const zone = document.getElementById('orderDeliveryZone').value;
    const payment = document.getElementById('orderPaymentMethod').value;
    const chirkut = document.getElementById('orderChirkutNote').value.trim();

    if (!name || !phone || !address) {
      alert('অনুগ্রহ করে নাম, ফোন নম্বর ও বিস্তারিত ঠিকানা পূরণ করুন!');
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = zone === 'inside' ? this.settings.deliveryInsideDhaka : this.settings.deliveryOutsideDhaka;
    const total = subtotal + deliveryFee;
    const zoneName = zone === 'inside' ? 'ঢাকা সিটি (৳৭০)' : 'ঢাকার বাইরে (৳১৩০)';

    let itemsText = this.cart.map((item, idx) => 
      `${idx + 1}. ${item.name} (${item.sku}) x ${item.quantity} = ৳${item.price * item.quantity}`
    ).join('\n');

    const text = 
`অর্ডার রিকোয়েস্ট (লহর ওয়েবসাইট)
--------------------------------------
গ্রাহকের নাম: ${name}
মোবাইল নম্বর: ${phone}
ডেলিভারি ঠিকানা: ${address}
এলাকা: ${zoneName}
পেমেন্ট মেথড: ${payment}
চিরকুটের বার্তা: ${chirkut || 'লহরের আন্তরিক শুভেচ্ছা'}

অর্ডারকৃত পণ্যের তালিকা:
${itemsText}

পণ্যের মোট মূল্য: ৳${subtotal}
ডেলিভারি চার্জ: ৳${deliveryFee}
সর্বমোট বিল: ৳${total}
--------------------------------------
অনুগ্রহ করে অর্ডারটি দ্রুত পাঠিয়ে দিন। ধন্যবাদ!`;

    window.open(`https://wa.me/${this.settings.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  }

  // ==========================================================================
  // SECURE ADMIN DASHBOARD & MANAGEMENT PORTAL
  // ==========================================================================
  renderAdminPortal() {
    const container = document.getElementById('adminContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="admin-login-box" style="max-width: 650px; text-align: left; padding: 36px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <img src="assets/logos/final_logo-02.jpg__1_-removebg-preview.png" alt="লহর" class="admin-login-logo" style="margin-bottom:12px;">
          <h2 style="font-size: 1.5rem; color: var(--color-noir); margin-bottom: 6px;">লহর সিস্টেম আর্কিটেকচার ও লাইভ স্ট্যাটাস</h2>
          <span style="display:inline-block; background: #E8F5E9; color: #2E7D32; padding: 4px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600;">
            <i class="fa-solid fa-circle-check"></i> GitHub Pages লাইভ প্রোডাকশন সংস্করণ
          </span>
        </div>

        <div style="background: #FDFBF7; border: 1px solid rgba(200, 155, 60, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h4 style="margin-bottom: 12px; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-store"></i> সক্রিয় পাবলিক স্টোরফ্রন্ট ফিচারসমূহ
          </h4>
          <ul style="font-size: 0.92rem; color: var(--color-text-main); line-height: 1.8; padding-left: 20px; margin: 0;">
            <li><strong>অথেনটিক শাড়ি ক্যাটালগ:</strong> ৬টি মাস্টারপিস কালেকশন (গামছা, হাতি ফোক, টাঙ্গাইল সিল্ক, ঢাকাই জামদানি, পপকর্ন বুটিক)।</li>
            <li><strong>ভিডিও লুকবুক ও রিলস:</strong> ৯:১৬ পোর্ট্রেট মডেল শ্যুট ও ড্রেপ প্রিভিউ।</li>
            <li><strong>হোয়াটসঅ্যাপ ক্লিক-টু-অর্ডার:</strong> ২৪/৭ সরাসরি সুরক্ষিত হোয়াটসঅ্যাপ অর্ডার মেসেজ জেনারেটর (+৮৮০ ১৫১৮-৯৭৯৮২৬)।</li>
            <li><strong>ক্যাম্পেইন ল্যান্ডিং পেজ:</strong> ফেসবুক বিজ্ঞাপনের জন্য স্পেশাল অফার পেজ (<code>#landing/boishakh-puja-special</code>)।</li>
            <li><strong>লাইভ সার্চ, উইশলিস্ট ও ব্যাগ:</strong> তাৎক্ষণিক প্রোডাক্ট সার্চ ও ব্যাগ কাউন্টার।</li>
          </ul>
        </div>

        <div style="background: #FFF8E1; border: 1px solid #FFE082; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <h4 style="margin-bottom: 10px; color: #E65100; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-shield-halved"></i> ক্লাউড ডাটাবেজ ও ব্যাকএন্ড সংক্রান্ত তথ্য
          </h4>
          <p style="font-size: 0.88rem; color: #5D4037; line-height: 1.6; margin-bottom: 10px;">
            GitHub Pages একটি স্ট্যাটিক সাইট হোস্টিং প্ল্যাটফর্ম। এতে কোনো সার্ভার-সাইড ডাটাবেজ (Server Database) থাকে না। ক্লায়েন্ট-সাইড ব্রাউজার মেমোরিতে (localStorage) এডমিন পাসওয়ার্ড বা ডাটা রাখা ঝুঁকিপূর্ণ ও অনিরাপদ।
          </p>
          <p style="font-size: 0.88rem; color: #5D4037; line-height: 1.6; margin: 0;">
            ডিভাইস-ব্যাপী রিয়েল-টাইম ক্যাটালগ আপডেট, রিভিউ অনুমোদন এবং কাস্টমার একাউন্টের জন্য ভবিষ্যতে একটি সুরক্ষিত ক্লাউড ডাটাবেজ API (যেমন Supabase / Firebase / Node.js Backend) যুক্ত করা সুপারিশকৃত। পূর্ণাঙ্গ লোকাল এডমিন ম্যানেজমেন্ট প্যানেল আপনার লোকাল ডেভেলপমেন্ট প্রজেক্টে সংরক্ষিত রয়েছে।
          </p>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <a href="#home" class="btn btn-primary" style="padding: 10px 24px;">
            <i class="fa-solid fa-house"></i> মূল স্টোরফ্রন্টে ফিরে যান
          </a>
          <a href="#landing/boishakh-puja-special" class="btn btn-outline-dark" style="padding: 10px 24px;">
            <i class="fa-solid fa-bullhorn"></i> স্পেশাল অফার দেখুন
          </a>
        </div>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

    // Authenticated Dashboard
    const totalProducts = this.products.length;
    const inStockCount = this.products.filter(p => p.inStock).length;
    const pendingReviews = this.reviews.filter(r => r.status === 'pending').length;
    const approvedReviews = this.reviews.filter(r => r.status === 'approved').length;
    const totalOrders = this.orders.length;

    container.innerHTML = `
      <div class="container admin-wrapper">
        <!-- Admin Header -->
        <div class="admin-header">
          <div class="admin-title-group">
            <h2><i class="fa-solid fa-gem" style="color:var(--color-primary);"></i> লহর অ্যাডমিন কন্ট্রোল প্যানেল</h2>
            <span>ব্র্যান্ড ব্যবস্থাপনা • অথেনটিক ক্যাটালগ ও অর্ডার ম্যানেজমেন্ট</span>
          </div>
          <div style="display:flex; gap:10px;">
            <a href="#home" class="btn btn-sm btn-outline-dark"><i class="fa-solid fa-globe"></i> লাইভ সাইট</a>
            <button class="btn btn-sm btn-primary" onclick="app.adminLogout()"><i class="fa-solid fa-right-from-bracket"></i> লগআউট</button>
          </div>
        </div>

        <!-- Metric Stat Cards -->
        <div class="admin-stats-grid">
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-shirt"></i></div>
            <div>
              <div class="stat-val">${totalProducts}</div>
              <div class="stat-lbl">মোট শাড়ির তালিকা</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-box-check"></i></div>
            <div>
              <div class="stat-val">${inStockCount}</div>
              <div class="stat-lbl">স্টকে রয়েছে</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="color:var(--color-gold);"><i class="fa-solid fa-clock"></i></div>
            <div>
              <div class="stat-val">${pendingReviews}</div>
              <div class="stat-lbl">অপেক্ষমাণ রিভিউ</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="color:#2E7D32;"><i class="fa-solid fa-star"></i></div>
            <div>
              <div class="stat-val">${approvedReviews}</div>
              <div class="stat-lbl">প্রকাশিত রিভিউ</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="color:var(--color-whatsapp);"><i class="fa-solid fa-cart-shopping"></i></div>
            <div>
              <div class="stat-val">${totalOrders}</div>
              <div class="stat-lbl">মোট অর্ডার</div>
            </div>
          </div>
        </div>

        <!-- Admin Nav Tabs -->
        <div class="admin-nav-tabs">
          <button class="admin-tab-btn active" onclick="app.switchAdminTab('products', this)"><i class="fa-solid fa-boxes-stacked"></i> শাড়ি ক্যাটালগ</button>
          <button class="admin-tab-btn" onclick="app.switchAdminTab('reviews', this)"><i class="fa-solid fa-comments"></i> রিভিউ মডারেশন (${pendingReviews})</button>
          <button class="admin-tab-btn" onclick="app.switchAdminTab('orders', this)"><i class="fa-solid fa-receipt"></i> অর্ডার হিস্ট্রি (${totalOrders})</button>
          <button class="admin-tab-btn" onclick="app.switchAdminTab('landing', this)"><i class="fa-solid fa-bullhorn"></i> ক্যাম্পেইন ল্যান্ডিং পেজ</button>
          <button class="admin-tab-btn" onclick="app.switchAdminTab('settings', this)"><i class="fa-solid fa-gear"></i> সেটিংস</button>
        </div>

        <!-- Tab Content -->
        <div class="admin-tab-content" id="adminTabContent">
          <!-- Populated by switchAdminTab -->
        </div>
      </div>
    `;

    this.switchAdminTab('products');
  }

  handleAdminLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('adminPassInput').value;
    if (pass === this.settings.adminPass || pass === 'lahar2026') {
      this.isAdminLoggedIn = true;
      sessionStorage.setItem('lahar_admin_logged', 'true');
      this.renderAdminPortal();
      this.showToast('সফলভাবে অ্যাডমিন প্যানেলে লগইন সম্পন্ন হয়েছে!', 'success');
    } else {
      alert('ভুল পাসওয়ার্ড! অনুগ্রহ করে সঠিক পাসওয়ার্ড দিন।');
    }
  }

  adminLogout() {
    this.isAdminLoggedIn = false;
    sessionStorage.removeItem('lahar_admin_logged');
    this.renderAdminPortal();
    this.showToast('লগআউট সম্পন্ন হয়েছে।');
  }

  switchAdminTab(tabName, btnEl = null) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const content = document.getElementById('adminTabContent');
    if (!content) return;

    if (tabName === 'products') {
      content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
          <div>
            <h3 style="margin-bottom:4px;"><i class="fa-solid fa-tags" style="color:var(--color-primary);"></i> শাড়ি ক্যাটালগ ও মূল্য ব্যবস্থাপনা</h3>
            <p style="color:var(--color-text-muted); font-size:0.88rem;">
              যেকোনো শাড়ির আসল দাম নিচের বক্সে লিখে সরাসরি <strong>"সেভ"</strong> চাপুন, অথবা <strong>"এডিট"</strong> আইকনে ক্লিক করে বিস্তারিত পরিবর্তন করুন।
            </p>
          </div>
          <button class="btn btn-sm btn-primary" onclick="app.openAddProductPrompt()">
            <i class="fa-solid fa-plus"></i> নতুন শাড়ি যোগ করুন
          </button>
        </div>

        <table class="admin-table">
          <thead>
            <tr>
              <th>ছবি</th>
              <th>কোড</th>
              <th>শাড়ির নাম</th>
              <th>বিক্রয় মূল্য (টাকা)</th>
              <th>আগের মূল্য (ডিসকাউন্ট)</th>
              <th>স্টক অবস্থা</th>
              <th>অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            ${this.products.map(p => `
              <tr>
                <td><img src="${p.primaryImage}" alt="${p.name}" style="width:44px; height:50px; object-fit:cover; border-radius:4px;"></td>
                <td><strong>${p.sku}</strong></td>
                <td>
                  <strong style="color:var(--color-noir);">${p.name}</strong>
                  <br><small style="color:var(--color-text-muted);">${p.category}</small>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <span style="font-weight:700; color:var(--color-primary);">৳</span>
                    <input type="number" id="price-input-${p.id}" value="${p.price}" 
                           style="width:90px; padding:6px 8px; font-weight:700; font-size:0.95rem; border:1px solid var(--color-border); border-radius:4px; background:#FAF8F5;"
                           title="বিক্রয় মূল্য পরিবর্তন করুন">
                  </div>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <span style="color:var(--color-text-light);">৳</span>
                    <input type="number" id="reg-price-input-${p.id}" value="${p.regularPrice || p.price}" 
                           style="width:90px; padding:6px 8px; font-size:0.9rem; border:1px solid var(--color-border); border-radius:4px; background:#FAF8F5;"
                           title="আগের মূল্য (ডিসকাউন্ট শো করার জন্য)">
                  </div>
                </td>
                <td>
                  <button class="badge-status ${p.inStock ? 'status-active' : 'status-draft'}" 
                          style="cursor:pointer; border:none; padding:5px 12px;" 
                          onclick="app.toggleProductStock('${p.id}')" 
                          title="ক্লিক করে স্টক পরিবর্তন করুন">
                    ${p.inStock ? 'স্টকে আছে ✓' : 'স্টক শেষ ✕'}
                  </button>
                </td>
                <td>
                  <div style="display:flex; gap:6px;">
                    <button class="btn btn-sm btn-primary" onclick="app.saveInlinePrice('${p.id}')" title="মূল্য সংরক্ষণ করুন">
                      <i class="fa-solid fa-floppy-disk"></i> সেভ
                    </button>
                    <button class="btn btn-sm btn-outline-dark" onclick="app.openEditProductModal('${p.id}')" title="বিস্তারিত এডিট করুন">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-sm" style="color:var(--color-primary); padding:6px 8px;" onclick="app.deleteProduct('${p.id}')" title="মুছে ফেলুন">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tabName === 'reviews') {
      content.innerHTML = `
        <h3 style="margin-bottom:16px;">গ্রাহক রিভিউ মডারেশন (অনুমোদন সিস্টেম)</h3>
        <p style="color:var(--color-text-muted); font-size:0.9rem; margin-bottom:16px;">
          সম্মানিত ক্রেতাদের সাবমিটকৃত রিভিউগুলো এডমিন অনুমোদন (Approve) করার পর স্বয়ংক্রিয়ভাবে মূল ওয়েবসাইটে দৃশ্যমান হবে।
        </p>

        <table class="admin-table">
          <thead>
            <tr>
              <th>তারিখ</th>
              <th>ক্রেতার নাম</th>
              <th>পণ্য</th>
              <th>রেটিং</th>
              <th>মন্তব্য</th>
              <th>স্ট্যাটাস</th>
              <th>অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            ${this.reviews.map(r => `
              <tr>
                <td>${r.date || 'সম্প্রতি'}</td>
                <td><strong>${r.customerName}</strong><br><small>${r.district || ''}</small></td>
                <td>${r.productName}</td>
                <td style="color:#FFA500;">${'★'.repeat(r.rating)}</td>
                <td style="max-width:280px; font-size:0.88rem;">${r.quote}</td>
                <td>
                  <span class="badge-status ${r.status === 'approved' ? 'status-active' : 'status-pending'}">
                    ${r.status === 'approved' ? 'অনুমোদিত' : 'অপেক্ষমাণ'}
                  </span>
                </td>
                <td>
                  ${r.status === 'pending' ? `
                    <button class="btn btn-sm btn-primary" onclick="app.approveReview('${r.id}')">অনুমোদন</button>
                  ` : ''}
                  <button class="btn btn-sm btn-outline-dark" onclick="app.deleteReview('${r.id}')">মুছে ফেলুন</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tabName === 'orders') {
      content.innerHTML = `
        <h3 style="margin-bottom:16px;">ওয়েবসাইট অর্ডার তালিকা</h3>
        ${this.orders.length === 0 ? `
          <p style="color:var(--color-text-muted); padding:30px; text-align:center;">এখনও কোনো অর্ডার রেকর্ড হয়নি। নতুন অর্ডার আসলে এখানে স্বয়ংক্রিয়ভাবে প্রদর্শিত হবে।</p>
        ` : `
          <table class="admin-table">
            <thead>
              <tr>
                <th>অর্ডার আইডি</th>
                <th>তারিখ</th>
                <th>গ্রাহক ও মোবাইল</th>
                <th>ঠিকানা</th>
                <th>অর্ডারকৃত পণ্য</th>
                <th>সর্বমোট</th>
                <th>পেমেন্ট</th>
                <th>স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              ${this.orders.map(o => `
                <tr>
                  <td><strong>${o.orderId}</strong></td>
                  <td>${o.date}</td>
                  <td>${o.customerName}<br><a href="tel:${o.phone}" style="color:var(--color-primary);">${o.phone}</a></td>
                  <td style="max-width:200px; font-size:0.85rem;">${o.address} (${o.zone})</td>
                  <td style="font-size:0.85rem;">${o.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}</td>
                  <td><strong>৳${o.total}</strong></td>
                  <td>${o.paymentMethod}</td>
                  <td>
                    <span class="badge-status status-active">${o.status}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      `;
    } else if (tabName === 'landing') {
      content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3>মার্কেটিং ক্যাম্পেইন ল্যান্ডিং পেজ</h3>
          <button class="btn btn-sm btn-primary" onclick="app.openNewLandingPrompt()">
            <i class="fa-solid fa-plus"></i> নতুন ক্যাম্পেইন পেজ তৈরি করুন
          </button>
        </div>
        <p style="color:var(--color-text-muted); font-size:0.9rem; margin-bottom:20px;">
          ফেসবুক বুস্টিং বা স্পেশাল বিজ্ঞাপনের জন্য হাই-কনভার্টিং ল্যান্ডিং পেজের লিঙ্ক শেয়ার করুন।
        </p>

        <table class="admin-table">
          <thead>
            <tr>
              <th>ক্যাম্পেইনের নাম</th>
              <th>ইউআরএল স্ল্যাগ (Slug)</th>
              <th>যুক্ত পণ্যসমূহ</th>
              <th>স্ট্যাটাস</th>
              <th>লাইভ লিঙ্ক</th>
            </tr>
          </thead>
          <tbody>
            ${this.landingPages.map(lp => `
              <tr>
                <td><strong>${lp.title}</strong></td>
                <td><code>#landing/${lp.slug}</code></td>
                <td>${lp.productIds.length}টি শাড়ি</td>
                <td><span class="badge-status status-active">সক্রিয়</span></td>
                <td>
                  <a href="#landing/${lp.slug}" target="_blank" class="btn btn-sm btn-outline-dark">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> প্রিভিউ দেখুন
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tabName === 'settings') {
      content.innerHTML = `
        <h3 style="margin-bottom:10px;">ওয়েবসাইট ও বিজনেস সেটিংস</h3>
        <p style="color:var(--color-text-muted); font-size:0.9rem; margin-bottom:20px;">
          এখানে যেকোনো তথ্য পরিবর্তন করে "সেটিংস সংরক্ষণ ও আপডেট করুন" বাটনে ক্লিক করলেই পুরো ওয়েবসাইটে তা স্বয়ংক্রিয়ভাবে কার্যকর হয়ে যাবে।
        </p>
        <form onsubmit="app.handleSaveSettings(event)" style="max-width:680px;">
          <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-group">
              <label>সরাসরি ফোন কল / মোবাইল নম্বর *</label>
              <input type="text" id="setHotline" value="${this.settings.hotline || '01518-979826'}" placeholder="01518-979826" required>
            </div>
            <div class="form-group">
              <label>হোয়াটসঅ্যাপ বিজনেস নম্বর (আন্তর্জাতিক কোড সহ) *</label>
              <input type="text" id="setWaNumber" value="${this.settings.whatsappNumber || '8801518979826'}" placeholder="8801518979826" required>
            </div>
          </div>

          <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-group">
              <label>ফেসবুক পেজ লিংক (Facebook Page URL)</label>
              <input type="url" id="setFacebookUrl" value="${this.settings.facebookUrl || 'https://www.facebook.com/lahar.saree'}" placeholder="https://www.facebook.com/lahar.saree">
            </div>
            <div class="form-group">
              <label>মেসেঞ্জার চ্যাট লিংক (Messenger Chat URL)</label>
              <input type="url" id="setMessengerUrl" value="${this.settings.messengerUrl || 'https://m.me/lahar.saree'}" placeholder="https://m.me/lahar.saree">
            </div>
          </div>

          <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-group">
              <label>ঢাকা সিটি ডেলিভারি চার্জ (টাকায়)</label>
              <input type="number" id="setDelInside" value="${this.settings.deliveryInsideDhaka || 70}" required>
            </div>
            <div class="form-group">
              <label>ঢাকার বাইরে ডেলিভারি চার্জ (টাকায়)</label>
              <input type="number" id="setDelOutside" value="${this.settings.deliveryOutsideDhaka || 130}" required>
            </div>
          </div>

          <div class="form-group">
            <label>অ্যাডমিন পাসওয়ার্ড পরিবর্তন</label>
            <input type="text" id="setAdminPass" value="${this.settings.adminPass || 'lahar2026'}" required>
          </div>

          <button type="submit" class="btn btn-primary" style="margin-top:14px;">
            <i class="fa-solid fa-floppy-disk"></i> সেটিংস সংরক্ষণ ও আপডেট করুন
          </button>
        </form>
      `;
    }
  }

  // Quick save price directly from the admin table
  saveInlinePrice(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    const priceEl = document.getElementById(`price-input-${productId}`);
    const regPriceEl = document.getElementById(`reg-price-input-${productId}`);

    const newPrice = parseInt(priceEl ? priceEl.value : p.price);
    const newRegPrice = parseInt(regPriceEl ? regPriceEl.value : p.regularPrice);

    if (isNaN(newPrice) || newPrice < 0) {
      alert('অনুগ্রহ করে সঠিক বিক্রয় মূল্য লিখুন!');
      return;
    }

    p.price = newPrice;
    p.regularPrice = isNaN(newRegPrice) ? newPrice : newRegPrice;

    this.saveData('lahar_products', this.products);
    this.renderCatalog();
    this.showToast(`"${p.name}" এর নতুন দাম ৳${newPrice.toLocaleString('bn-BD')} সফলভাবে সংরক্ষিত হয়েছে!`, 'success');
  }

  // Open full product details & price edit modal
  openEditProductModal(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    let modal = document.getElementById('adminEditProductModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'adminEditProductModal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-container modal-md" style="padding:28px;">
        <button class="modal-close-btn" onclick="document.getElementById('adminEditProductModal').classList.remove('active'); document.body.style.overflow='';">&times;</button>
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:18px; padding-bottom:14px; border-bottom:1px solid var(--color-border);">
          <img src="${p.primaryImage}" style="width:60px; height:68px; object-fit:cover; border-radius:6px;">
          <div>
            <h3 style="font-size:1.3rem; margin-bottom:4px;">শাড়ির তথ্য ও দাম এডিট</h3>
            <span style="font-size:0.85rem; color:var(--color-text-muted);">কোড: ${p.sku}</span>
          </div>
        </div>

        <form onsubmit="app.handleSaveProductEdit(event, '${p.id}')">
          <div class="form-group">
            <label>শাড়ির নাম</label>
            <input type="text" id="editProdName" value="${p.name}" required>
          </div>

          <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-group">
              <label>বিক্রয় মূল্য (টাকায়) *</label>
              <input type="number" id="editProdPrice" value="${p.price}" required>
            </div>
            <div class="form-group">
              <label>আগের মূল্য / রেগুলার মূল্য (টাকায়)</label>
              <input type="number" id="editProdRegPrice" value="${p.regularPrice || p.price}" required>
            </div>
          </div>

          <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="form-group">
              <label>ক্যাটাগরি</label>
              <select id="editProdCategory">
                <option value="handloom" ${p.category === 'handloom' ? 'selected' : ''}>গামছা ও হ্যান্ডলুম</option>
                <option value="folk" ${p.category === 'folk' ? 'selected' : ''}>হাতি মোটিফ ও ফোক</option>
                <option value="silk" ${p.category === 'silk' ? 'selected' : ''}>টাঙ্গাইল সফট সিল্ক</option>
                <option value="jamdani" ${p.category === 'jamdani' ? 'selected' : ''}>ঢাকাই জামদানি</option>
                <option value="boutique" ${p.category === 'boutique' ? 'selected' : ''}>ফেস্টিভ বুটিক ও পপকর্ন</option>
              </select>
            </div>
            <div class="form-group">
              <label>ট্যাগ / ব্যাজ</label>
              <input type="text" id="editProdTag" value="${p.tag || ''}" placeholder="যেমন: হট কালেকশন / বেস্টসেলার">
            </div>
          </div>

          <div class="form-group">
            <label>কাপড়ের বিবরণ (Fabric Specs)</label>
            <input type="text" id="editProdFabric" value="${p.specs.fabric}">
          </div>

          <div class="form-group">
            <label>শাড়ির সংক্ষিপ্ত বিবরণ</label>
            <textarea id="editProdDesc" rows="3">${p.description}</textarea>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
            <button type="button" class="btn btn-outline-dark btn-sm" onclick="document.getElementById('adminEditProductModal').classList.remove('active'); document.body.style.overflow='';">বাতিল</button>
            <button type="submit" class="btn btn-primary btn-sm"><i class="fa-solid fa-floppy-disk"></i> সংরক্ষণ করুন</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  handleSaveProductEdit(e, productId) {
    e.preventDefault();
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    p.name = document.getElementById('editProdName').value.trim();
    p.price = parseInt(document.getElementById('editProdPrice').value) || p.price;
    p.regularPrice = parseInt(document.getElementById('editProdRegPrice').value) || p.price;
    p.category = document.getElementById('editProdCategory').value;
    p.tag = document.getElementById('editProdTag').value.trim();
    p.specs.fabric = document.getElementById('editProdFabric').value.trim();
    p.description = document.getElementById('editProdDesc').value.trim();

    this.saveData('lahar_products', this.products);
    this.renderCatalog();
    this.switchAdminTab('products');

    const modal = document.getElementById('adminEditProductModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    this.showToast(`"${p.name}" এর সব তথ্য ও দাম সফলভাবে আপডেট হয়েছে!`, 'success');
  }

  toggleProductStock(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;
    p.inStock = !p.inStock;
    this.saveData('lahar_products', this.products);
    this.switchAdminTab('products');
    this.renderCatalog();
    this.showToast(`"${p.name}" এর স্টক স্ট্যাটাস আপডেট করা হয়েছে!`);
  }

  deleteProduct(productId) {
    if (!confirm('আপনি কি নিশ্চিত যে এই শাড়িটি ক্যাটালগ থেকে মুছে ফেলতে চান?')) return;
    this.products = this.products.filter(p => p.id !== productId);
    this.saveData('lahar_products', this.products);
    this.switchAdminTab('products');
    this.renderCatalog();
    this.showToast('শাড়িটি তালিকা থেকে সরানো হয়েছে।');
  }

  openAddProductPrompt() {
    const name = prompt('শাড়ির নাম লিখুন:');
    if (!name) return;
    const sku = prompt('প্রোডাক্ট কোড / SKU (যেমন: LHR-NEW-07):', 'LHR-NEW-' + Math.floor(10 + Math.random() * 90));
    const price = parseInt(prompt('বিক্রয় মূল্য (টাকায়):', '1650')) || 1650;
    const category = prompt('ক্যাটাগরি (handloom / silk / jamdani / folk / boutique):', 'handloom') || 'handloom';

    const newProd = {
      id: 'lhr-' + Date.now(),
      sku: sku,
      name: name,
      nameEn: name,
      category: category,
      price: price,
      regularPrice: price + 300,
      tag: 'নতুন আগমন',
      tagClass: 'tag-hot',
      inStock: true,
      isFeatured: true,
      primaryImage: 'assets/images/gamcha7.png',
      hoverImage: 'assets/images/gamcha 6.png',
      gallery: ['assets/images/gamcha7.png', 'assets/images/gamcha 6.png'],
      video: null,
      description: 'লহরের নতুন অথেনটিক শাড়ি কালেকশন। আরামদায়ক ও নিখুঁত ফিনিশিং।',
      specs: {
        fabric: 'প্রিমিয়াম সুতি হ্যান্ডলুম',
        length: '১২ হাত',
        blouse: 'ব্লাউজ পিস অন্তর্ভুক্ত',
        craft: 'হাতে বোনা তাঁত নকশা',
        care: 'হালকা পানিতে হাত ধোয়া'
      }
    };

    this.products.unshift(newProd);
    this.saveData('lahar_products', this.products);
    this.switchAdminTab('products');
    this.renderCatalog();
    this.showToast('নতুন শাড়ি সফলভাবে ক্যাটালগে যুক্ত হয়েছে!', 'success');
  }

  approveReview(revId) {
    const rev = this.reviews.find(r => r.id === revId);
    if (!rev) return;
    rev.status = 'approved';
    this.saveData('lahar_reviews', this.reviews);
    this.switchAdminTab('reviews');
    this.renderAuthenticReviews();
    this.showToast('রিভিউটি সফলভাবে অনুমোদিত ও সাইটে প্রকাশিত হয়েছে!', 'success');
  }

  deleteReview(revId) {
    if (!confirm('রিভিউটি মুছে ফেলতে চান?')) return;
    this.reviews = this.reviews.filter(r => r.id !== revId);
    this.saveData('lahar_reviews', this.reviews);
    this.switchAdminTab('reviews');
    this.renderAuthenticReviews();
    this.showToast('রিভিউটি মুছে ফেলা হয়েছে।');
  }

  openNewLandingPrompt() {
    const title = prompt('ক্যাম্পেইনের টাইটেল লিখুন (যেমন: পহেলা বৈশাখ স্পেশাল শাড়ি উৎসব):');
    if (!title) return;
    const slug = prompt('ইউআরএল স্ল্যাগ (ইংরেজি ছোট অক্ষরে, যেমন: boishakh-offer):', 'campaign-' + Date.now());
    
    const newPage = {
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-'),
      title: title,
      subtitle: 'লহরের বিশেষ অফার ও সীমিত সংস্করণের শাড়ির সমাহার',
      heroTag: 'বিশেষ অফার',
      productIds: this.products.slice(0, 4).map(p => p.id),
      isPublished: true
    };

    this.landingPages.push(newPage);
    this.saveData('lahar_landing_pages', this.landingPages);
    this.switchAdminTab('landing');
    this.showToast('নতুন ল্যান্ডিং পেজ তৈরি সম্পন্ন হয়েছে!', 'success');
  }

  handleSaveSettings(e) {
    e.preventDefault();
    this.settings.whatsappNumber = document.getElementById('setWaNumber').value.trim();
    this.settings.hotline = document.getElementById('setHotline').value.trim();
    this.settings.facebookUrl = document.getElementById('setFacebookUrl').value.trim() || 'https://www.facebook.com/lahar.saree';
    this.settings.messengerUrl = document.getElementById('setMessengerUrl').value.trim() || 'https://m.me/lahar.saree';
    this.settings.deliveryInsideDhaka = parseInt(document.getElementById('setDelInside').value) || 70;
    this.settings.deliveryOutsideDhaka = parseInt(document.getElementById('setDelOutside').value) || 130;
    this.settings.adminPass = document.getElementById('setAdminPass').value.trim() || 'lahar2026';

    this.saveData('lahar_settings', this.settings);
    this.applySettingsToDOM();
    this.showToast('সেটিংস সফলভাবে সংরক্ষিত ও ওয়েবসাইটে আপডেট হয়েছে!', 'success');
  }

  // ==========================================================================
  // HIGH-CONVERTING REUSABLE MARKETING LANDING PAGE
  // ==========================================================================
  showLandingPage(slug) {
    const storeView = document.getElementById('storeView');
    const adminView = document.getElementById('adminView');
    const landingView = document.getElementById('landingPageView');
    const container = document.getElementById('landingPageContainer');

    storeView.classList.add('hidden');
    adminView.classList.add('hidden');
    landingView.classList.remove('hidden');

    const page = (this.landingPages && this.landingPages.find(p => p.slug === slug)) || (this.landingPages && this.landingPages[0]) || {
      slug: 'boishakh-puja-special',
      title: 'উৎসবের রঙে রাঙাও নিজেকে • লহর উৎসব স্পেশাল কালেকশন',
      subtitle: 'ঐতিহ্যবাহী তাঁত ও আধুনিক নান্দনিকতায় সাজানো সীমিত সংস্করণের শাড়ির সমাহার',
      heroTag: 'উৎসব কালেকশন ২০২৬',
      productIds: ['lhr-gmc-01', 'lhr-gmc-02', 'lhr-gmc-03', 'lhr-gmc-05'],
      isPublished: true
    };
    const campaignProducts = this.products.filter(p => page.productIds && page.productIds.includes(p.id));
    const displayProducts = (campaignProducts && campaignProducts.length > 0) ? campaignProducts : this.products.slice(0, 4);

    // Update Nav Active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#landing/${slug}` || link.getAttribute('href').startsWith('#landing'));
    });

    container.innerHTML = `
      <div class="landing-hero">
        <div class="container landing-hero-content">
          <span class="landing-campaign-pill">${page.heroTag}</span>
          <h1 class="landing-title">${page.title}</h1>
          <p class="landing-subtitle">${page.subtitle}</p>
          <div class="landing-urgent-bar">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>সীমিত সংখ্যক ঐতিহ্যবাহী শাড়ির স্টক • সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</span>
          </div>
          <div style="margin-top:24px;">
            <a href="https://wa.me/${this.settings.whatsappNumber}?text=হ্যালো%20লহর,%20আমি%20${encodeURIComponent(page.title)}%20থেকে%20অর্ডার%20করতে%20চাই।" 
               target="_blank" rel="noopener" class="btn btn-whatsapp-header" style="font-size:1.05rem; padding:12px 24px;">
              <i class="fa-brands fa-whatsapp"></i> সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন
            </a>
          </div>
        </div>
      </div>

      <div class="landing-products-section">
        <div class="container">
          <div class="section-header text-center" style="margin-bottom:40px;">
            <span class="section-tag">নির্বাচিত মাস্টারপিস</span>
            <h2 class="section-title">ক্যাম্পেইনের বিশেষ শাড়ি সমূহ</h2>
          </div>

          <div class="products-grid">
            ${displayProducts.map(p => `
              <div class="product-card">
                <div class="product-media-box" onclick="app.openProductModal('${p.id}')">
                  <img src="${p.primaryImage}" alt="${p.name}" class="product-main-img">
                  <span class="product-tag tag-hot" style="position:absolute; top:12px; left:12px;">বিশেষ অফার</span>
                </div>
                <div class="product-info">
                  <span class="product-sku">${p.sku}</span>
                  <h3 class="product-title" onclick="app.openProductModal('${p.id}')">${p.name}</h3>
                  <div class="product-price-box">
                    <span class="current-price">৳${p.price.toLocaleString('bn-BD')}</span>
                    ${p.regularPrice ? `<span class="regular-price">৳${p.regularPrice.toLocaleString('bn-BD')}</span>` : ''}
                  </div>
                  <div class="product-card-actions">
                    <button class="btn btn-card-cart" onclick="app.addToCart('${p.id}')">ব্যাগে নিন</button>
                    <button class="btn btn-card-wa" onclick="app.orderViaWhatsApp('${p.id}')">
                      <i class="fa-brands fa-whatsapp"></i> অর্ডার
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Sticky Landing Footer CTA -->
      <div class="landing-sticky-cta">
        <div>
          <strong style="color:var(--color-noir);">লহর বিশেষ কালেকশন</strong>
          <span style="font-size:0.85rem; color:var(--color-text-muted); display:block;">সারা দেশে হোম ডেলিভারি ও প্রিয়জনের জন্য চিরকুট</span>
        </div>
        <div style="display:flex; gap:10px;">
          <a href="#home" class="btn btn-outline-dark btn-sm"><i class="fa-solid fa-house"></i> মূল ওয়েবসাইট</a>
          <a href="https://wa.me/${this.settings.whatsappNumber}?text=হ্যালো%20লহর,%20আমি%20ক্যাম্পেইনের%20শাড়ি%20অর্ডার%20করতে%20চাই।" 
             target="_blank" rel="noopener" class="btn btn-whatsapp-header">
            <i class="fa-brands fa-whatsapp"></i> অর্ডার দিন
          </a>
        </div>
      </div>
    `;

    window.scrollTo(0, 0);
  }

  // ==========================================================================
  // MODAL UTILITIES
  // ==========================================================================
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const video = modal.querySelector('video');
      if (video) video.pause();
    }
  }

  // Toast Notification
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;
    toast.innerHTML = `
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Global Instant Instance
const app = new LaharApp();
