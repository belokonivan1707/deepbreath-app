import { useDispatch } from 'react-redux'
import { actionRemoveItem, actionAddItem, actionClearItemFromCart } from '../../../store/cart/actions'
import DeleteSvg from '../../../assets/cart-container/garbage.svg'
import {
  Wrap,
  ItemBox,
  BoxImageQuantity,
  ImageBox,
  Image,
  NameBox,
  Name,
  MakerId,
  BoxQuantity,
  Quantity,
  ShowBox,
  Show,
  Decrease,
  Increase,
  BoxPriceDelete,
  BoxPrice,
  BoxBtn,
  Btn,
  Delete,
  P,
  Span,
  Text,
} from './styling'

const MyCartItem = ({ product, totalPrice }) => {
  const dispatch = useDispatch()
  const { id, imageUrl, title, quantity, price } = product

  return (
    <Wrap>
      <ItemBox>
        <BoxImageQuantity>
          <ImageBox>
            <Image style={{ backgroundImage: `url(${imageUrl})` }} />
            <NameBox>
              <Name>{title}</Name>
              <MakerId>#{id}</MakerId>
            </NameBox>
          </ImageBox>
          <BoxQuantity>
            <Quantity>
              <Decrease onClick={() => dispatch(actionRemoveItem(product))}> - </Decrease>
              <ShowBox>
                <Show>{quantity}</Show>
              </ShowBox>
              <Increase onClick={() => dispatch(actionAddItem(product))}> + </Increase>
            </Quantity>
          </BoxQuantity>
        </BoxImageQuantity>
        <BoxPriceDelete>
          <BoxPrice>
            <P>
              <Span>Price:</Span>
              <Text>${price}.00</Text>
            </P>
            <P>
              <Span>Price:</Span>
              <Text>${totalPrice}.00</Text>
            </P>
          </BoxPrice>
          <BoxBtn>
            <Btn onClick={() => dispatch(actionClearItemFromCart(product))}>
              <Delete src={DeleteSvg} />
            </Btn>
          </BoxBtn>
        </BoxPriceDelete>
      </ItemBox>
    </Wrap>
  )
}

export default MyCartItem
