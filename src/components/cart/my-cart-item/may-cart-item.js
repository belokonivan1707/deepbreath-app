import { Wrap, Box, Image } from './styling'

const MyCartItem = ({ product }) => {
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
        </div>
      </div>
    </Wrap>
  )
}

export default MyCartItem
