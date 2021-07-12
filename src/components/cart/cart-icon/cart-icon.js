import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { quantityProducts } from '../../../utils/total-sum/header-count-cart-items'
import ShoppingCart from '../../../assets/product-card/shopping-cart.svg'
import ShoppingCartWhite from '../../../assets/product-card/shopping-cart-white.svg'
import { Wrap, Image, CountBox, Count } from './styling'

const CartIcon = ({ primary }) => {
  const [itemCount, setItemCount] = useState(null)
  const products = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    setItemCount(quantityProducts(products))
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
