import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { sortByMakers } from '../../utils/sortByMaker'
import { totalSumForAllMakers } from '../../utils/total-sum/total-sum-for-all-makers'
import { Container, Wrap, TitleBox, Title } from './styling'
import Header from '../../containers/header-container/header-container'
import MyCart from '../../containers/my-cart-container/my-cart-container'

const CartPage = () => {
  const [sortedProducts, setSortedProducts] = useState([])
  const cardItems = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    setSortedProducts(sortByMakers(cardItems))
  }, [cardItems])

  return (
    <Container>
      <Wrap>
        <Header primary />
        <TitleBox>
          <Title>My cart</Title>
        </TitleBox>
        <div>
          {sortedProducts?.map((el) => {
            return <MyCart key={el.makerId} title={el.maker} makerId={el.makerId} products={el.products} />
          })}
        </div>

        <div>
          <div>
            <p>Total: ${totalSumForAllMakers(sortedProducts)}</p>
          </div>
        </div>
      </Wrap>
    </Container>
  )
}

export default CartPage
