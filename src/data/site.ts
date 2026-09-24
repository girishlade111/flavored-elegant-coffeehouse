export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  art: 'rosetta' | 'bear' | 'heart';
  tone: 'glass' | 'cream';
}

export const formatPrice = (val: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
};

export const siteData = {
  brand: {
    name: 'Flavored',
    tagline: 'Wake up to something special.',
  },
  nav: [
    { name: 'Home', href: '#home', active: true },
    { name: 'Coffee Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact us', href: '#contact' },
  ] as NavLink[],
  navCta: {
    name: 'Coffee Shop',
    href: '#menu',
  },
  hero: {
    headingLine1: 'Coffee',
    headingLine2: 'The Best For You',
    ctaText: 'View Menu',
    ctaHref: '#menu',
    chips: [
      { icon: 'cup-steam', label: 'Hot coffee', href: '#menu' },
      { icon: 'iced-glass', label: 'Iced coffee', href: '#menu' },
      { icon: 'takeaway-mug', label: 'Take-away', href: '#menu' },
      { icon: 'beans', label: 'Beans', href: '#menu' },
    ],
  },
  productsIntro: {
    heading: 'Lorem Ipsum is simply dummy text of',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    ctaText: 'Learn More',
    ctaHref: '#about',
  },
  products: [
    {
      id: 'americano',
      name: 'Americano',
      desc: '100% Natural Arabica or Robusta, 30 ml cup',
      price: 2.50,
      art: 'rosetta',
      tone: 'glass',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      desc: 'Coffee 50%, milk 50%, 280 ml',
      price: 2.50,
      art: 'bear',
      tone: 'cream',
    },
  ] as ProductItem[],
  spotlight: {
    heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ctaText: 'Learn More',
    ctaHref: '#menu',
    price: 2.50,
  },
  app: {
    heading: 'App is Available',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    badges: [
      { id: 'apple', label: 'Download on the App Store', href: '#' },
      { id: 'google-play', label: 'Get it on Google Play', href: '#' },
    ],
    phoneMenu: {
      title: 'Coffee',
      cta: 'View Menu',
      chips: ['cup-steam', 'iced-glass', 'takeaway-mug', 'beans'],
      products: [
        {
          name: 'Americano',
          desc: '100% Natural Arabica or Robusta, 30 ml cup',
          price: 2.50,
          art: 'rosetta',
        },
        {
          name: 'Cappuccino',
          desc: 'Coffee 50%, milk 50%, 280 ml',
          price: 2.50,
          art: 'bear',
        },
      ],
      moccaccino: {
        name: 'Moccaccino',
        desc: 'Mix with Coffee 30%, milk 50%, Water 20%, 280 ml + foam',
      },
      nav: ['home', 'cart', 'user', 'sliders'],
    },
    phoneDetail: {
      title: 'Latte Grand',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      totalPriceLabel: 'Total Price',
      price: 3.50,
      cta: 'Add to Cart',
    },
  },
  reserve: {
    eyebrow: "LET'S TALK",
    heading: 'Want to Reserve a Table?',
    ctaText: 'Contact Now',
    ctaHref: '#contact',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  footer: {
    brand: 'Flavored',
    tagline: 'Wake up to something special.',
    services: {
      title: 'Our Services',
      links: ['Pricing', 'Tracking', 'Report a Bug', 'Terms of Services'],
    },
    company: {
      title: 'Our Company',
      links: ['Pricing', 'Tracking', 'Report a Bug', 'Terms of Services'],
    },
    address: {
      title: 'Address',
      lines: ['Lorem Ipsum is', 'simply dummy', 'text of the', 'printing and'],
    },
  },
};
