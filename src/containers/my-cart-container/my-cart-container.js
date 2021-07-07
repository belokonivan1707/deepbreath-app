// import { useSelector } from 'react-redux'
import { Wrap } from './styling'
import MyCartItem from '../../components/cart/my-cart-item/may-cart-item'

const MyCart = ({ products, title }) => {
  // const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <Wrap>
      {products ? <div>
        <div>
          <h3>{title}</h3>
          {/* {products?.map((el, index) => (
            <h3 key={el.maker}>{index}</h3>
          ))} */}
        </div>
        <div>
          <div></div>
          <div>
            {products.map((product) => (
              <MyCartItem key={products.id} product={product} />
            ))}
          </div>
        </div>
      </div>: null}
    </Wrap>
  )
}

export default MyCart
