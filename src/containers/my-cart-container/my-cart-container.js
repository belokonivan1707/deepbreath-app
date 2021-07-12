import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useSortableData from '../../hooks/useSortableData'
import { totalSumForSingleMaker, progresBar } from '../../utils/total-sum/total-sum-for-single-maker'
import {
  Wrap,
  TitleBox,
  Title,
  Btn,
  Container,
  TableBox,
  TotalSumWrap,
  TotalSumBox,
  PolicyBox,
  Text,
  TypeDelivery,
  Sum,
  Price,
  TypeDeliveryBox,
  ProgresBarBox,
  TitleBar,
  Box,
  GrenTag,
  Span,
  GrayLine,
  GreenLine,
} from './styling'
import MyCartItem from '../../components/cart/my-cart-item/my-cart-item'

const MyCart = ({ products, title, makerId }) => {
  const [totalForMaker, setTotalForMaker] = useState(0)
  const [progressBar, setProgressBar] = useState(0)

  const [productsToShow, setProductsToShow] = useState([])
  const { items, requestSort } = useSortableData(productsToShow)

  const makers = useSelector((state) => state.productMakersStore.makers)
  const history = useHistory()

  useEffect(() => {
    setTotalForMaker(totalSumForSingleMaker(products))
    setProgressBar(progresBar(products))
    const addPropertyTotalPriceForMyCartItem = products.map((product) => {
      return {
        ...product,
        totalPrice: product.quantity * product.price,
      }
    })

    setProductsToShow(addPropertyTotalPriceForMyCartItem)
  }, [products])

  const openMakerPage = () => {
    const foundMaker = makers?.find((el) => el.id === makerId)
    if (foundMaker) {
      history.push({
        pathname: `${foundMaker.title}`,
        state: foundMaker,
      })
    }
  }

  return (
    <Wrap>
      {items ? (
        <div>
          <TitleBox>
            <div>
              <Title>{title}</Title>
            </div>
            <div>
              <Btn onClick={openMakerPage}>VIEW SHOP</Btn>
            </div>
          </TitleBox>
          <Container>
            <TableBox>
              <p onClick={() => requestSort('quantity')}>quantity</p>
              <p onClick={() => requestSort('price')}>price</p>
              <p>total</p>
            </TableBox>
            <div>
              <div>
                {items.map((product) => (
                  <MyCartItem key={product.id} product={product} totalPrice={product.totalPrice} />
                ))}
              </div>
            </div>

            <TotalSumWrap>
              <TotalSumBox>
                <Sum>
                  Subtotal with delivery: <Price>${totalForMaker}</Price>
                </Sum>
                <TypeDeliveryBox>
                  <Text>Delivery:</Text>
                  <TypeDelivery>STANDART: $100›</TypeDelivery>
                </TypeDeliveryBox>
                <ProgresBarBox>
                  <TitleBar>
                    {progressBar >= 100 ? (
                      <p>You get a free shipping</p>
                    ) : (
                      <Box>
                        <GrenTag>${500 - progressBar * 5 + ' more '}</GrenTag> <Span>for free shipping</Span>
                      </Box>
                    )}
                  </TitleBar>
                  <GrayLine>
                    <GreenLine time={0} y={progressBar}></GreenLine>
                  </GrayLine>
                </ProgresBarBox>
              </TotalSumBox>
              <PolicyBox>Cancellation policy ›</PolicyBox>
            </TotalSumWrap>
          </Container>
        </div>
      ) : null}
    </Wrap>
  )
}

export default MyCart
