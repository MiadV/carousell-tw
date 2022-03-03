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
