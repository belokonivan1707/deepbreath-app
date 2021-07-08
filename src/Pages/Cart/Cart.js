import { useSelector } from 'react-redux'
import { Wrap } from './styling'
import Header from '../../containers/header-container/header-container'
import MyCart from '../../containers/my-cart-container/my-cart-container'

const CartPage = () => {
  const cardItems = useSelector((state) => state.cart.cartItems)

  return (
    <Wrap>
      <Header primary />
      <h1>CartPage</h1>
      {cardItems.map((el) => {
        return <MyCart key={el.maker} title={el.maker} products={el.products} />
      })}
    </Wrap>
  )
}

export default CartPage
