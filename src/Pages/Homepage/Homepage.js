import Header from '../../containers/header-container/header-container'
import HeaderFilter from '../../containers/header-filter-container/header-filter-container'
import ProductsContainer from '../../containers/products-container/products-container'
import Dropdown from '../../components/dropdown/dropdown'
import { Footer } from '../../components/footer/footer'
import { Wrap } from './styling'

const Homepage = () => {
  return (
    <>
      <Header />
      <HeaderFilter />
      <ProductsContainer />
      <Wrap>
        <Dropdown />
      </Wrap>
      <Footer />
    </>
  )
}

export default Homepage
