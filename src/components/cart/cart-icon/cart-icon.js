import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ShoppingCart from '../../../assets/product-card/shopping-cart.svg'
import ShoppingCartWhite from '../../../assets/product-card/shopping-cart-white.svg'
import { Wrap, Image, CountBox, Count } from './styling'

const CartIcon = ({ primary }) => {
  const [itemCount, setItemCount] = useState(null)
  const products = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    if (products.length) {
      const quantityProducts = () => {
        let count = 0
        products.map((el) => (el ? count++ : null))
        return count
      }
      setItemCount(quantityProducts())
    }
  }, [products])

  return (
    <Wrap>
      <Image
        style={primary ? { backgroundImage: `url(${ShoppingCart})` } : { backgroundImage: `url(${ShoppingCartWhite})` }}
      />
      <CountBox>{itemCount ? <Count>{itemCount}</Count> : null}</CountBox>
    </Wrap>
  )
}

export default CartIcon
