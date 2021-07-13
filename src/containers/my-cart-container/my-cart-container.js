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
  FlexBox,
  BtnBox,
} from './styling'
import MyCartItem from '../../components/cart/my-cart-item/my-cart-item'
import SortArrows from '../../components/cart/sort-arrows/sort-arrows'

const MyCart = ({ products, title, makerId }) => {
  const history = useHistory()
  const [totalForMaker, setTotalForMaker] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
  const [productsToShow, setProductsToShow] = useState([])
  const makers = useSelector((state) => state.productMakersStore.makers)
  const { items, requestSort, sortConfig } = useSortableData(productsToShow)

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return name
    }

    return sortConfig.key === name ? sortConfig.direction : undefined
  }

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
            <BtnBox>
              <Btn onClick={openMakerPage}>VIEW SHOP</Btn>
            </BtnBox>
          </TitleBox>
          <Container>
            <TableBox>
              <TableNameQuantBox>
                <Name className={getClassNamesFor('title')} onClick={() => requestSort('title')}>
                  Name
                  <SortArrows />
                </Name>
                <Quantity onClick={() => requestSort('quantity')}>
                  Quantity
                  <SortArrows />
                </Quantity>
              </TableNameQuantBox>
              <TablePriceTotalBox>
                <Price onClick={() => requestSort('price')}>
                  Price <SortArrows />
                </Price>
                <Total onClick={() => requestSort('totalPrice')}>
                  Total
                  <SortArrows />
                </Total>
                <Empty />
              </TablePriceTotalBox>
            </TableBox>
            <FlexBox>
              <div>
                {items.map((product) => (
                  <MyCartItem key={product.id} product={product} totalPrice={product.totalPrice} />
                ))}
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
            </FlexBox>
          </Container>
        </div>
      ) : null}
    </Wrap>
  )
}

export default MyCart
