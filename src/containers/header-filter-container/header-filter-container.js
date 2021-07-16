import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MainWrap, MainContainer, Wrap, Box, Title, Description, Red } from './styling'
import HeaderFilterInputs from '../../components/header-filter/header-filter-inputs/header-filter-inputs'

const HeaderFilter = () => {
  const [inputCity, setInputCity] = useState('')
  const [inputProduct, setInputProducts] = useState('')
  const [copyProductsFromRedux, setCopyProductsFromRedux] = useState([])
  const [copyProductMakersFromRedux, setCopyProductMakersFromRedux] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedOption, setSelectedOption] = useState('Products')
  const products = useSelector((state) => state.productStore.products)
  const productsMakers = useSelector((state) => state.productMakersStore.makers)

  useEffect(() => {
    setCopyProductsFromRedux(products)
    setCopyProductMakersFromRedux(productsMakers)
  }, [products, productsMakers])

  const setInputState = (name, value) => {
    if (name === 'product') {
      setInputProducts(value)
    }

    if (name === 'city') {
      setInputCity(value)
    }
  }

  const optionChanged = (option) => {
    setSelectedOption(option)
  }

  // const filterByCity = (data, cityValue) => {
  //   return data.filter((el) => el.city.toLocaleLowerCase().includes(cityValue.toLocaleLowerCase()))
  // }

  useEffect(() => {
    if (!inputCity && !inputProduct) {
      setFilteredProducts([])
    }

    if (selectedOption === 'Products') {
      if (inputProduct && inputCity) {
        const test = () => {
          let result = copyProductsFromRedux.filter((el) =>
            el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase())
          )
          const second = result.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
          return second
        }

        setFilteredProducts(test())
      }

      if (inputProduct !== '' && inputCity === '') {
        setFilteredProducts(
          copyProductsFromRedux.filter((el) => el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase()))
        )
      }

      if (inputCity !== '' && inputProduct === '') {
        setFilteredProducts(
          copyProductsFromRedux.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
        )
      }
    }

    if (selectedOption === 'Foodmakers') {
      if (inputProduct && inputCity) {
        const test = () => {
          let result = copyProductMakersFromRedux.filter((el) =>
            el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase())
          )
          const second = result.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
          return second
        }
        setFilteredProducts(test())
      }

      if (inputProduct !== '' && inputCity === '') {
        setFilteredProducts(
          copyProductMakersFromRedux.filter((el) =>
            el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase())
          )
        )
      }

      if (inputCity !== '' && inputProduct === '') {
        setFilteredProducts(
          copyProductMakersFromRedux.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
        )
      }
    }
  }, [inputProduct, inputCity, copyProductsFromRedux, selectedOption, copyProductMakersFromRedux])

  return (
    <MainWrap>
      <MainContainer>
        <Wrap>
          <Box>
            <Title>
              Connecting curious <Red>Food Lovers</Red>
            </Title>
            <Description>to a global marketplace of local and dedicated food makers</Description>
          </Box>
          <HeaderFilterInputs
            handleChange={setInputState}
            valueProduct={inputProduct}
            valueCity={inputCity}
            filteredProducts={filteredProducts}
            optionChanged={optionChanged}
          />
        </Wrap>
      </MainContainer>
    </MainWrap>
  )
}

export default HeaderFilter
