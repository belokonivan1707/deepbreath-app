import Patric from "../../assets/makers/Patrick_Bateman.jpg";
import Emica from "../../assets/makers/Ema_Jolly.jpg";
import Albert from "../../assets/makers/Albert_Camus.jpg";
import Nowinski from "../../assets/makers/Chris_Nowinski.jpg";

const PRODUCTS_MAKERS = [
  {
    id: 1,
    title: "Patrick Bateman",
    photo: Patric,
    productsID: [1, 2, 3, 4, 5],
    isLiked: false,
    productsImage: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    ],
    description:
      "Patrick Bateman is a fictional character and the protagonist, as well as the narrator, of the novel American Psycho by Bret Easton Ellis, and its film adaptation. He is a wealthy, materialistic Wall Street investment banker who leads a secret life as a serial killer. Bateman has also briefly appeared in other Ellis novels and their film and theatrical adaptations.",
    businessTags: ["hats", "fuck people", "kill animals", "masturbation"],
    city: "Hong Kong",
    price: "from $200 000",
    rating: 0,
  },
  {
    id: 2,
    title: "Albert Camus",
    photo: Albert,
    productsID: [6, 7, 8, 9, 10],
    isLiked: true,
    productsImage: [
      "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      "https://i.ibb.co/dJbG1cT/yeezy.png",
      "https://i.ibb.co/bPmVXyP/black-converse.png",
    ],
    description:
      "Camus was born in French Algeria to Pieds Noirs parents. He spent his childhood in a poor neighborhood and later studied philosophy at the University of Algiers. He was in Paris when the Germans invaded France during World War II in 1940. ",
    businessTags: ["sneakers", "idea of dying", "philosophy", "writing"],
    city: "Brooklyn",
    price: "from $1 000 000",
    rating: 5,
  },
  {
    id: 3,
    title: "Chris Nowinski",
    photo: Nowinski,
    productsID: [11, 12, 13, 14, 15],
    isLiked: false,
    productsImage: [
      "https://i.ibb.co/XzcwL5s/black-shearling.png",
      "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
      "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    ],
    description:
      "Christopher John Nowinski (born September 24, 1978) is a former American professional wrestler with World Wrestling Entertainment (WWE), subsequently author, co-founder and CEO of the Concussion Legacy Foundation, co-founder of the Boston University CTE Center.",
    businessTags: ["jackets", "steroids", "wrestling federation"],
    city: "New York",
    price: "from $100",
    rating: 1,
  },
  {
    id: 4,
    title: "Ema Jolly",
    photo: Emica,
    productsID: [16, 17, 18, 19, 20],
    isLiked: false,
    productsImage: [
      "https://i.ibb.co/7CQVJNm/blue-tank.png",
      "https://i.ibb.co/4W2DGKm/floral-blouse.png",
      "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    ],
    description:
      "Ema Jolly, better known by her stage name Emika, is an English electronic musician of Czech. Emika, a classically trained musician who studied classical piano and composition, grew up in Milton Keynes, England.",
    businessTags: ["womens", "music", "morphinum", "downtempo dubstep"],
    city: "Sydney",
    price: "from $500 000",
    rating: 5,
  },
];

export default PRODUCTS_MAKERS;
