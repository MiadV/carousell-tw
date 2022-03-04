export const slides = [
  {
    image: '/images/slides/s1-min.jpg',
    href: '/#',
  },
  {
    image: '/images/slides/s2-min.jpg',
    href: '/#',
  },
  {
    image: '/images/slides/s3-min.jpg',
    href: '/#',
  },
  {
    image: '/images/slides/s4-min.jpg',
    href: '/#',
  },
];

export const categories = [
  {
    title: 'Following',
    thumbnail: '/images/categories/Following.png',
  },
  {
    title: "Men's Fashion",
    thumbnail: '/images/categories/Mens-Fashion.png',
  },
  {
    title: "Women's Fashion",
    thumbnail: '/images/categories/Womens-Fashion.png',
  },
  {
    title: 'Free Items',
    thumbnail: '/images/categories/freeitems.png',
  },
  {
    title: 'Muslimah Fashion',
    thumbnail: '/images/categories/Muslimah-Fashion.png',
  },
  {
    title: 'Toys & Games',
    thumbnail: '/images/categories/Toys-Games.png',
  },
  {
    title: 'Health & Beauty',
    thumbnail: '/images/categories/Health-Beauty.png',
  },
  {
    title: 'Electronics',
    thumbnail: '/images/categories/Electronics.png',
  },
  {
    title: 'Mobile Phones & Tablets',
    thumbnail: '/images/categories/mobile-phones-tablets.png',
  },
  {
    title: 'Babies & Kids',
    thumbnail: '/images/categories/Babies-Kids.png',
  },
  {
    title: 'Video Gaming',
    thumbnail: '/images/categories/Video-Game.png',
  },
  {
    title: 'Food & Drinks',
    thumbnail: '/images/categories/Food-Drinks.png',
  },
  {
    title: 'Books & Stationery',
    thumbnail: '/images/categories/Books-Stationary.png',
  },
  {
    title: 'Music & Media',
    thumbnail: '/images/categories/Music-Media.png',
  },
  {
    title: 'Photography',
    thumbnail: '/images/categories/Photography.png',
  },
  {
    title: 'Kitchen & Appliances',
    thumbnail: '/images/categories/kitchen-appliances.png',
  },
  {
    title: 'Luxury',
    thumbnail: '/images/categories/Luxury.png',
  },
  {
    title: 'Home & Furniture',
    thumbnail: '/images/categories/Furniture.png',
  },
  {
    title: 'Sports',
    thumbnail: '/images/categories/Sports.png',
  },
  {
    title: 'Textbooks',
    thumbnail: '/images/categories/Text-Books.png',
  },
  {
    title: 'Design & Craft',
    thumbnail: '/images/categories/design-craft.png',
  },
  {
    title: 'Auto Accessories',
    thumbnail: '/images/categories/Car-Accessories.png',
  },
  {
    title: 'Motorbikes',
    thumbnail: '/images/categories/Motorbikes.png',
  },
  {
    title: 'Cars',
    thumbnail: '/images/categories/Cars.png',
  },
  {
    title: 'Property',
    thumbnail: '/images/categories/Property.png',
  },
  {
    title: 'K-Wave',
    thumbnail: '/images/categories/Kwave.png',
  },
  {
    title: 'J-pop',
    thumbnail: '/images/categories/Jpop.png',
  },
  {
    title: 'Tickets & Vouchers',
    thumbnail: '/images/categories/Ticket-Voucher.png',
  },
  {
    title: 'Antiques',
    thumbnail: '/images/categories/Vintage-Collectibles.png',
  },
  {
    title: 'Pet Supplies',
    thumbnail: '/images/categories/Pet-Supplies.png',
  },
];

export const topBarLinks: Record<
  string,
  {
    title: string;
    href: string;
    icon: string;
    children: {
      title: string;
      href: string;
    }[];
  }[][]
> = {
  Fashion: [
    //col-1
    [
      {
        title: "Men's Fashion",
        href: '/#',
        icon: '/images/categories/Mens-Fashion.png',
        children: [
          {
            title: 'Bags & Wallets',
            href: '/#',
          },
          {
            title: 'Footwear',
            href: '/#',
          },
          {
            title: 'Clothes',
            href: '/#',
          },
          {
            title: 'Accessories',
            href: '/#',
          },
          {
            title: 'Watches',
            href: '/#',
          },
        ],
      },
      {
        title: "Women's Fashion",
        href: '/#',
        icon: '/images/categories/Womens-Fashion.png',
        children: [
          {
            title: 'Clothes',
            href: '/#',
          },
          {
            title: 'Bags & Wallets',
            href: '/#',
          },
          {
            title: 'Shoes',
            href: '/#',
          },
          {
            title: 'Accessories',
            href: '/#',
          },
          {
            title: 'Jewellery',
            href: '/#',
          },
          {
            title: 'Watches',
            href: '/#',
          },
          {
            title: 'Bridal Wear',
            href: '/#',
          },
        ],
      },
      {
        title: 'Muslimah Fashion',
        href: '/#',
        icon: '/images/categories/Muslimah-Fashion.png',
        children: [
          {
            title: 'Tops',
            href: '/#',
          },
          {
            title: 'Bottoms',
            href: '/#',
          },
          {
            title: 'Two-piece',
            href: '/#',
          },
          {
            title: 'Dresses',
            href: '/#',
          },
          {
            title: 'Scarves',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Health & Beauty',
        href: '/#',
        icon: '/images/categories/Health-Beauty.png',
        children: [
          {
            title: 'Skin, Bath, & Body',
            href: '/#',
          },
          {
            title: 'Hair Care',
            href: '/#',
          },
          {
            title: 'Makeup',
            href: '/#',
          },
          {
            title: "Men's Grooming",
            href: '/#',
          },
          {
            title: 'Perfumes, Nail Care, & Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Luxury',
        href: '/#',
        icon: '/images/categories/Luxury.png',
        children: [
          {
            title: 'Bags & Wallets',
            href: '/#',
          },
          {
            title: 'Apparel',
            href: '/#',
          },
          {
            title: 'Accessories',
            href: '/#',
          },
          {
            title: 'Watches',
            href: '/#',
          },
        ],
      },
    ],
  ],
  'Home & Living': [
    //col-1
    [
      {
        title: 'Books & Stationery',
        href: '/#',
        icon: '/images/categories/Books-Stationary.png',
        children: [
          {
            title: 'Stationery',
            href: '/#',
          },
          {
            title: 'Books',
            href: '/#',
          },
          {
            title: "Children's Books",
            href: '/#',
          },
          {
            title: 'Comics & Manga',
            href: '/#',
          },
          {
            title: 'Magazines & Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Textbooks',
        href: '/#',
        icon: '/images/categories/Text-Books.png',
        children: [],
      },
      {
        title: 'Home & Furniture',
        href: '/#',
        icon: '/images/categories/Furniture.png',
        children: [
          {
            title: 'Home Décor',
            href: '/#',
          },
          {
            title: 'Furniture',
            href: '/#',
          },
          {
            title: 'Gardening',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Kitchen & Appliances',
        href: '/#',
        icon: '/images/categories/kitchen-appliances.png',
        children: [],
      },
      {
        title: 'Babies & Kids',
        href: '/#',
        icon: '/images/categories/Babies-Kids.png',
        children: [
          {
            title: 'Strollers, Bags & Carriers',
            href: '/#',
          },
          {
            title: 'Toys & Walkers',
            href: '/#',
          },
          {
            title: "Girls' Apparel",
            href: '/#',
          },
          {
            title: "Boys' Apparel",
            href: '/#',
          },
          {
            title: 'Babies Apparel',
            href: '/#',
          },
          {
            title: 'Cots & Cribs',
            href: '/#',
          },
          {
            title: 'Nursing & Feeding',
            href: '/#',
          },
          {
            title: 'Maternity',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
    ],
  ],
  'Mobiles & Electronics': [
    //col-1
    [
      {
        title: 'Electronics',
        href: '/#',
        icon: '/images/categories/Electronics.png',
        children: [
          {
            title: 'Computers',
            href: '/#',
          },
          {
            title: 'TVs & Entertainment Systems',
            href: '/#',
          },
          {
            title: 'Audio',
            href: '/#',
          },
          {
            title: 'Computer Parts & Accessories',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Mobile Phones & Tablets',
        href: '/#',
        icon: '/images/categories/mobile-phones-tablets.png',
        children: [
          {
            title: 'iPhone',
            href: '/#',
          },
          {
            title: 'Android Phones',
            href: '/#',
          },
          {
            title: 'Tablets',
            href: '/#',
          },
          {
            title: 'Mobile & Tablet Accessories',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
    ],
  ],
  'Hobbies & Games': [
    //col-1
    [
      {
        title: 'Photography',
        href: '/#',
        icon: '/images/categories/Photography.png',
        children: [],
      },
      {
        title: 'Pet Supplies',
        href: '/#',
        icon: '/images/categories/Pet-Supplies.png',
        children: [],
      },
      {
        title: 'Design & Craft',
        href: '/#',
        icon: '/images/categories/Pet-Supplies.png',
        children: [],
      },
      {
        title: 'Food & Drinks',
        href: '/#',
        icon: '/images/categories/design-craft.png',
        children: [],
      },

      {
        title: 'Music & Media',
        href: '/#',
        icon: '/images/categories/Music-Media.png',
        children: [],
      },
    ],
    //col-2
    [
      {
        title: 'Toys & Games',
        href: '/#',
        icon: '/images/categories/Toys-Games.png',
        children: [],
      },
      {
        title: 'Sports',
        href: '/#',
        icon: '/images/categories/Sports.png',
        children: [],
      },
      {
        title: 'Video Gaming',
        href: '/#',
        icon: '/images/categories/Video-Game.png',
        children: [],
      },
      {
        title: 'K-Wave',
        href: '/#',
        icon: '/images/categories/Kwave.png',
        children: [],
      },

      {
        title: 'J-pop',
        href: '/#',
        icon: '/images/categories/Jpop.png',
        children: [],
      },
    ],
    //col-3
    [
      {
        title: 'Tickets & Vouchers',
        href: '/#',
        icon: '/images/categories/Ticket-Voucher.png',
        children: [],
      },
      {
        title: 'Antiques',
        href: '/#',
        icon: '/images/categories/Vintage-Collectibles.png',
        children: [],
      },
    ],
  ],
  'Cars & Property': [
    //col-1
    [
      {
        title: 'Cars',
        href: '/#',
        icon: '/images/categories/Cars.png',
        children: [
          {
            title: 'Cars for Sale',
            href: '/#',
          },
          {
            title: 'Vehicle Rentals',
            href: '/#',
          },
        ],
      },
      {
        title: 'Auto Accessories',
        href: '/#',
        icon: '/images/categories/Car-Accessories.png',
        children: [],
      },
      {
        title: 'Property',
        href: '/#',
        icon: '/images/categories/Property.png',
        children: [
          {
            title: 'For Sale',
            href: '/#',
          },
          {
            title: 'Rentals',
            href: '/#',
          },
          {
            title: 'Others',
            href: '/#',
          },
        ],
      },
      {
        title: 'Motorbikes',
        href: '/#',
        icon: '/images/categories/Motorbikes.png',
        children: [],
      },
    ],
  ],
};

export const topSearches = [
  { href: '/#', title: 'iphone' },
  { href: '/#', title: 'ipad' },
  { href: '/#', title: 'nike' },
  { href: '/#', title: 'ps4' },
  { href: '/#', title: 'sofa' },
  { href: '/#', title: 'ikea' },
  { href: '/#', title: 'blouse' },
  { href: '/#', title: 'adidas' },
  { href: '/#', title: 'uniqlo' },
  { href: '/#', title: 'sweatshirt' },
  { href: '/#', title: 'laptop' },
  { href: '/#', title: 'vans' },
  { href: '/#', title: 'dress' },
  { href: '/#', title: 'monitor' },
  { href: '/#', title: 'vtg' },
  { href: '/#', title: 'zara' },
  { href: '/#', title: 'ps5' },
  { href: '/#', title: 'tv' },
  { href: '/#', title: 'iphone 13' },
  { href: '/#', title: 'hoodie' },
  { href: '/#', title: 'coach' },
  { href: '/#', title: 'nintendo switch' },
  { href: '/#', title: 'carhartt' },
  { href: '/#', title: 'converse' },
  { href: '/#', title: 'top' },
  { href: '/#', title: 'sling bag' },
  { href: '/#', title: 'gucci' },
  { href: '/#', title: 'macbook' },
  { href: '/#', title: 'vintage' },
  { href: '/#', title: 'dior' },
  { href: '/#', title: 'stussy' },
  { href: '/#', title: 'charles and keith' },
  { href: '/#', title: 'baju kurung' },
  { href: '/#', title: 'table' },
  { href: '/#', title: 'cap' },
  { href: '/#', title: 'jacket' },
  { href: '/#', title: 'ipad pro' },
  { href: '/#', title: 'h&m' },
  { href: '/#', title: 'nike dunk' },
  { href: '/#', title: 'duck' },
  { href: '/#', title: 'rolex' },
  { href: '/#', title: 'dr martens' },
  { href: '/#', title: 'bag' },
  { href: '/#', title: 'samsung' },
  { href: '/#', title: 'watch' },
  { href: '/#', title: 'supreme' },
  { href: '/#', title: 'prada' },
  { href: '/#', title: 'airpods' },
  { href: '/#', title: 'windbreaker' },
  { href: '/#', title: 'chanel' },
];

export const footerCategories: Record<
  string,
  {
    href: string;
    title: string;
  }[]
> = {
  'Cars & Property': [
    {
      href: '/#',
      title: 'Used Cars for Sale',
    },
    {
      href: '/#',
      title: 'New Cars for Sale',
    },
    {
      href: '/#',
      title: 'Car Rentals',
    },
    {
      href: '/#',
      title: 'Car Accessories',
    },
    {
      href: '/#',
      title: 'Motorcycles for Sale',
    },
    {
      href: '/#',
      title: 'Motorcycle Accessories',
    },
    {
      href: '/#',
      title: 'Property for Sale',
    },
    {
      href: '/#',
      title: 'Property for Rent',
    },
    {
      href: '/#',
      title: 'Apartments & Condos Sale',
    },
    {
      href: '/#',
      title: 'Bungalow House Sale',
    },
  ],
  Fashion: [
    {
      href: '/#',
      title: "Men's Fashion",
    },
    {
      href: '/#',
      title: "Women's Fashion",
    },
    {
      href: '/#',
      title: 'Health & Beauty',
    },
    {
      href: '/#',
      title: 'Luxury',
    },
    {
      href: '/#',
      title: "Men's Watches",
    },
    {
      href: '/#',
      title: "Men's Clothes",
    },
    {
      href: '/#',
      title: "Women's Clothes",
    },
    {
      href: '/#',
      title: "Women's Bags & Wallets",
    },
    {
      href: '/#',
      title: 'Muslimah Fashion',
    },
    {
      href: '/#',
      title: 'Skin, Bath, & Body',
    },
  ],
  'Home & Living': [
    {
      href: '/#',
      title: 'Furniture',
    },
    {
      href: '/#',
      title: 'Gardening',
    },
    {
      href: '/#',
      title: 'Books & Stationery',
    },
    {
      href: '/#',
      title: 'Kitchen & Appliances',
    },
    {
      href: '/#',
      title: 'Textbooks',
    },
    {
      href: '/#',
      title: 'Babies & Kids',
    },
    {
      href: '/#',
      title: "Children's Books",
    },
    {
      href: '/#',
      title: "Girls' Apparel",
    },
    {
      href: '/#',
      title: "Boys' Apparel",
    },
    {
      href: '/#',
      title: 'Strollers, Bags & Carriers',
    },
  ],
  'Mobiles & Electronics': [
    {
      href: '/#',
      title: 'Mobile Phones & Tablets',
    },
    {
      href: '/#',
      title: 'Electronics',
    },
    {
      href: '/#',
      title: 'iPhone',
    },
    {
      href: '/#',
      title: 'Android Phones',
    },
    {
      href: '/#',
      title: 'Cases & Sleeves',
    },
    {
      href: '/#',
      title: 'Tablets',
    },
    {
      href: '/#',
      title: 'Power Banks & Chargers',
    },
    {
      href: '/#',
      title: 'Audio',
    },
    {
      href: '/#',
      title: 'Computers',
    },
    {
      href: '/#',
      title: 'TVs & Entertainment Systems',
    },
  ],
  'Hobbies & Games': [
    {
      href: '/#',
      title: 'Photography',
    },
    {
      href: '/#',
      title: 'Video Gaming',
    },
    {
      href: '/#',
      title: 'K-Wave',
    },
    {
      href: '/#',
      title: 'Tickets & Vouchers',
    },
    {
      href: '/#',
      title: 'Toys & Games',
    },
    {
      href: '/#',
      title: 'Antiques',
    },
    {
      href: '/#',
      title: 'Pet Supplies',
    },
    {
      href: '/#',
      title: 'Design & Craft',
    },
    {
      href: '/#',
      title: 'Food & Drinks',
    },
    {
      href: '/#',
      title: 'Sports',
    },
  ],
  'Jobs & Services': [
    {
      href: '/#',
      title: 'Home Services',
    },
    {
      href: '/#',
      title: 'Jobs',
    },
    {
      href: '/#',
      title: 'Beauty Services',
    },
    {
      href: '/#',
      title: 'Part-time Jobs',
    },
    {
      href: '/#',
      title: 'Full-time Jobs',
    },
    {
      href: '/#',
      title: 'Aircon Services',
    },

    {
      href: '/#',
      title: 'Home Cleaning',
    },
    {
      href: '/#',
      title: 'Electronics & Gadget Repairs',
    },
    {
      href: '/#',
      title: 'Tuition',
    },
  ],
};

export const footerLinks = [
  { title: 'Help Centre', href: '/#' },
  { title: 'Contact Us', href: '/#' },
  { title: 'Press', href: '/#' },
  { title: 'Jobs', href: '/#' },
  { title: 'Advertise with Us', href: '/#' },
  { title: 'Terms', href: '/#' },
  { title: 'Privacy', href: '/#' },
];
