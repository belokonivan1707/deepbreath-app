const PRODUCTS = [
  {
    id: 1,
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    title: 'Brown Brim',
    price: 50,
    tags: ['hats', 'milf', 'fuck milf'],
    isLiked: true,
    rating: 1,
    city: 'Hong Kong',
    maker: 'Patrick Bateman',
    makerId: 1,
    weight: 400,
  },
  {
    id: 2,
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    title: 'Blue Beanie',
    price: 40,
    tags: ['condons', 'hats', 'fuck milf'],
    isLiked: false,
    rating: 2,
    city: 'Hong Kong',
    maker: 'Patrick Bateman',
    makerId: 1,
    weight: 700,
  },
  {
    id: 3,
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    title: 'Brown Cowboy',
    price: 45,
    tags: ['hats', 'hats', 'hats'],
    isLiked: false,
    rating: 5,
    city: 'Hong Kong',
    maker: 'Patrick Bateman',
    makerId: 1,
    weight: 300,
  },
  {
    id: 4,
    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    title: 'Grey Brim',
    price: 30,
    tags: ['hats', 'hats', 'hats hats'],
    isLiked: false,
    rating: 4,
    city: 'Hong Kong',
    maker: 'Patrick Bateman',
    makerId: 1,
    weight: 270,
  },
  {
    id: 5,
    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    title: 'Green Beanie',
    price: 60,
    tags: ['hats', 'hats', 'hats'],
    isLiked: false,
    rating: 3,
    city: 'Hong Kong',
    maker: 'Patrick Bateman',
    makerId: 1,
    weight: 200,
  },
  {
    id: 6,
    imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
    title: 'Adidas NMD',
    price: 99,
    tags: ['sneakers', 'sneakers', 'sneakers'],
    isLiked: false,
    rating: 1,
    city: 'Brooklyn',
    maker: 'Albert Camus',
    makerId: 2,
    weight: 230,
  },
  {
    id: 7,
    imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
    title: 'Adidas Yeezy',
    price: 90,
    tags: ['sneakers', 'sneakers', 'sneakers'],
    isLiked: false,
    rating: 5,
    city: 'Brooklyn',
    maker: 'Albert Camus',
    makerId: 2,
    weight: 450,
  },
  {
    id: 8,
    imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
    title: 'Black Converse',
    price: 120,
    tags: ['sneakers', 'sneakers', 'sneakers'],
    isLiked: false,
    rating: 1,
    city: 'Brooklyn',
    maker: 'Albert Camus',
    makerId: 2,
    weight: 2000,
  },
  {
    id: 9,
    imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
    title: 'Nike White AirForce',
    price: 100,
    tags: ['sneakers', 'sneakers', 'sneakers'],
    isLiked: false,
    rating: 0,
    city: 'Brooklyn',
    maker: 'Albert Camus',
    makerId: 2,
    weight: 2310,
  },
  {
    id: 10,
    imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
    title: 'Timberlands',
    price: 102,
    tags: ['sneakers', 'sneakers', 'sneakers'],
    isLiked: false,
    rating: 0,
    city: 'Brooklyn',
    maker: 'Albert Camus',
    makerId: 2,
    weight: 190,
  },
  {
    id: 11,
    imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
    title: 'Black Jean Shearling',
    price: 120,
    tags: ['jackets', 'jackets', 'jackets'],
    isLiked: false,
    rating: 2,
    city: 'New York',
    maker: 'Chris Nowinski',
    makerId: 3,

    weight: 235,
  },
  {
    id: 12,
    imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
    title: 'Blue Jean Jacket',
    price: 130,
    tags: ['jackets', 'jackets', 'jackets'],
    isLiked: false,
    rating: 3,
    city: 'New York',
    maker: 'Chris Nowinski',
    makerId: 3,
    weight: 235,
  },
  {
    id: 13,
    imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
    title: 'Grey Jean Jacket',
    price: 110,
    tags: ['jackets', 'jackets', 'jackets'],
    isLiked: false,
    rating: 5,
    city: 'New York',
    maker: 'Chris Nowinski',
    makerId: 3,
    weight: 489,
  },
  {
    id: 14,
    imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
    title: 'Brown Shearling',
    price: 99,
    tags: ['jackets', 'jackets', 'jackets'],
    isLiked: false,
    rating: 1,
    city: 'New York',
    maker: 'Chris Nowinski',
    makerId: 3,
    weight: 200,
  },
  {
    id: 15,
    imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
    title: 'Tan Trench',
    price: 135,
    tags: ['jackets', 'jackets', 'jackets'],
    isLiked: false,
    rating: 5,
    city: 'New York',
    maker: 'Chris Nowinski',
    makerId: 3,
    weight: 600,
  },
  {
    id: 16,
    imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
    title: 'Blue Tanktop',
    price: 89,
    tags: ['candy', 'candy', 'candy candy'],
    isLiked: false,
    rating: 5,
    city: 'Sydney',
    maker: 'Ema Jolly',
    makerId: 4,
    weight: 200,
  },
  {
    id: 17,
    imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
    title: 'Floral Blouse',
    price: 80,
    tags: ['womens', 'womens', 'womens'],
    isLiked: false,
    rating: 4,
    city: 'Sydney',
    maker: 'Ema Jolly',
    makerId: 4,
    weight: 130,
  },
  {
    id: 18,
    imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    title: 'Floral Dress',
    price: 65,
    tags: ['womens', 'womens', 'womens'],
    isLiked: false,
    rating: 0,
    city: 'Sydney',
    maker: 'Ema Jolly',
    makerId: 4,
    weight: 200,
  },
  {
    id: 19,
    imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
    title: 'Red Dots Dress',
    price: 70,
    tags: ['womens', 'womens', 'womens'],
    isLiked: false,
    rating: 5,
    city: 'Sydney',
    maker: 'Ema Jolly',
    makerId: 4,
    weight: 145,
  },
  {
    id: 20,
    imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
    title: 'Striped Sweater',
    price: 75,
    tags: ['womens', 'womens', 'womens'],
    isLiked: false,
    rating: 1,
    city: 'Sydney',
    maker: 'Ema Jolly',
    makerId: 4,
    weight: 200,
  },
]

export default PRODUCTS
