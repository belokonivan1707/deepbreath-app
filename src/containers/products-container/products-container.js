import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actionChangeIsLikedProperty } from '../../store/products/actions'
import { actionChangeIsLikedPropertyOnMakers, actionGetMakers } from '../../store/products-maker/actions'
import Bake from '../../assets/titles/bake.svg'
import { Wrap, ProductsWrap, Title, Box, MakersTitle, TitleSvg } from './styling'
import ProductCard from '../../components/cards/product-card/product-card'
import MoreProductsButton from '../../components/buttons/more-products-btn/more-products-btn'
import ExperiencesCard from '../../components/cards/experiences-card/experiences-card'
import MakersCard from '../../components/cards/makers-card/makers-card'

const ProductsContainer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [productsCounter, setProductsCounter] = useState(6)
  const [makerCounter, setMakerCounter] = useState(3)
  const [experiencesConter, setExperiencesConter] = useState(2)
  const products = useSelector((state) => state.productStore.products)
  const makers = useSelector((state) => state.productMakersStore.makers)

  useEffect(() => {
    const init = actionGetMakers()
    dispatch(init)
  }, [dispatch])

  const LoadMoreProductsCards = () => {
    setProductsCounter(productsCounter + 6)
  }

  const LoadMoreMakersCards = () => {
    setMakerCounter(makerCounter + 3)
  }

  const LoadMoreExperiencesCards = () => {
    setExperiencesConter(experiencesConter + 2)
  }

  const changeIsLikedProperty = useCallback(
    (id) => {
      dispatch(actionChangeIsLikedProperty(id))
    },
    [dispatch]
  )

  const changeIsLikedPropertyForMakers = (id) => {
    dispatch(actionChangeIsLikedPropertyOnMakers(id))
  }

  const openProductPage = (id) => {
    const foundProduct = products?.find((el) => el.id === id)
    if (foundProduct) {
      history.push({
        pathname: `product/${id}`,
        state: foundProduct,
      })
    }
  }

  const openMakerPage = (id) => {
    const foundMaker = makers?.find((el) => el.id === id)
    if (foundMaker) {
      history.push({
        pathname: `${foundMaker.title}`,
        state: foundMaker,
      })
    }
  }

  return (
    <Wrap>
      <Title>
        <h1>Shop local makers</h1>
        <p>Looking for something unique? Discover and shop custom or limited products by your local makers.</p>
      </Title>
      <ProductsWrap>
        {products.slice(0, productsCounter).map((product) => (
          <ProductCard
            handleClick={changeIsLikedProperty}
            key={product.id}
            product={product}
            openProductPage={openProductPage}
          />
        ))}
        <Box>
          {products.length > productsCounter ? (
            <MoreProductsButton handleClick={LoadMoreProductsCards}>More Products Near You</MoreProductsButton>
          ) : null}
        </Box>
      </ProductsWrap>
      <MakersTitle>
        <TitleSvg style={{ backgroundImage: `url(${Bake})` }}></TitleSvg>
        <h1>Your local food makers</h1>
        <p>Planing for an event? Enquire your local artisan maker.</p>
      </MakersTitle>
      <ProductsWrap>
        {makers.slice(0, makerCounter).map((maker, index) => (
          <MakersCard key={index} maker={maker} openMakerPage={openMakerPage} />
        ))}
        <Box>
          {makers.length > makerCounter ? (
            <MoreProductsButton handleClick={LoadMoreMakersCards}>explore more</MoreProductsButton>
          ) : null}
        </Box>
      </ProductsWrap>
      <Title>
        <h1>Shop local experiences</h1>
        <p>Got a party to plan? Make a group booking for a masterclass` or a winery, brewery or distillery tour.</p>
      </Title>
      <ProductsWrap>
        {makers.slice(0, experiencesConter).map((maker, index) => (
          <ExperiencesCard handleClick={changeIsLikedPropertyForMakers} key={index} maker={maker} />
        ))}
        <Box>
          {makers.length > experiencesConter ? (
            <MoreProductsButton handleClick={LoadMoreExperiencesCards}>explore more</MoreProductsButton>
          ) : null}
        </Box>
      </ProductsWrap>
    </Wrap>
  )
}

export default ProductsContainer
