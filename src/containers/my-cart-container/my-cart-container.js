import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useSortableData from '../../hooks/useSortableData'
import { totalSumForSingleMaker, progresBar } from '../../utils/total-sum/total-sum-for-single-maker'
import ArrowDown from '../../assets/cart-container/sort-arrow-down.svg'
import ArrowUp from '../../assets/cart-container/sort-arrow-up.svg'
import {
  Wrap,
  TitleBox,
  Title,
  Btn,
  Container,
  TableBox,
  ArrowBox,
  TableNameQuantBox,
  Name,
  Quantity,
  TablePriceTotalBox,
  Price,
  Total,
  Empty,
  TotalSumWrap,
  TotalSumBox,
  PolicyBox,
  Text,
  TypeDelivery,
  Sum,
  TotalSum,
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
              <TableNameQuantBox>
                <Name onClick={() => requestSort('title')}> Name</Name>
                <Quantity onClick={() => requestSort('quantity')}>Quantity</Quantity>
              </TableNameQuantBox>
              <TablePriceTotalBox>
                <Price onClick={() => requestSort('price')}>
                  Price
                  <ArrowBox>
                    <img src={ArrowUp} alt="arrow-up" />
                    <img src={ArrowDown} alt="arrow-down" />
                  </ArrowBox>
                </Price>
                <Total onClick={() => requestSort('totalPrice')}>Total</Total>
                <Empty />
              </TablePriceTotalBox>
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
                  Subtotal with delivery: <TotalSum>${totalForMaker}</TotalSum>
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
