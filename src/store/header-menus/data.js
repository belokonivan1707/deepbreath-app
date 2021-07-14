import Makers from '../../assets/header/makers-menu/for-makers.jpg'
import GetHired from '../../assets/header/makers-menu/get-hired.jpg'
import CreateExperience from '../../assets/header/makers-menu/create-experience.jpg'
import CreateShop from '../../assets/header/makers-menu/create-shop.jpg'

export const MENU_FOR_FOOD_MAKERS = [
  {
    id: 1,
    title: 'For Makers',
    image: Makers,
    route: 'foodmakers',
  },
  {
    id: 2,
    title: 'Get Hired',
    image: GetHired,
    route: 'createprofile',
  },
  {
    id: 3,
    title: 'Create Experience',
    image: CreateExperience,
    route: 'createexperience',
  },
  {
    id: 4,
    title: 'Create Shop',
    image: CreateShop,
    route: 'createshop',
  },
]

export const MENU_EXPLORE = [
  {
    id: 1,
    title: 'Create Experience',
    image: CreateExperience,
    route: 'study',
  },
  {
    id: 2,
    title: 'Get Hired',
    image: GetHired,
    route: '',
  },
  {
    id: 3,
    title: 'For Makers',
    image: Makers,
    route: '',
  },
  {
    id: 4,
    title: 'Create Shop',
    image: CreateShop,
    route: '',
  },
  {
    id: 5,
    title: 'Create Shop',
    image: CreateShop,
    route: '',
  },
]
