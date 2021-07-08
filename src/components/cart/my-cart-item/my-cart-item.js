// import { useDispatch } from 'react-redux'
import { Wrap, Box, Image } from './styling'

const MyCartItem = ({ product }) => {
  // const dispatch = useDispatch()
  return (
    <Wrap>
      <div>
        <div>
          <Box>
            <Image style={{ backgroundImage: `url(${product.imageUrl})` }} />
            <div>
              <p>{product.title}</p>
              <span>#{product.id}</span>
            </div>
          </Box>
          <p>{product.quantity}</p>
          <p>{product.price}</p>
          <button>Pizda</button>
        </div>
      </div>
    </Wrap>
  )
}

export default MyCartItem
