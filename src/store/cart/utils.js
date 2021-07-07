const makeNewProduct = (payload) => ({ ...payload, quantity: 1 })

export const addItemToCart = (state, payload) => {
  const initialState = [...state]

  const isArrayHasAnyItem = initialState.length

  if (!isArrayHasAnyItem) {
    return [{ maker: payload.maker, products: [makeNewProduct(payload)] }]
  }

  const existingMaker = initialState.find((product) => product.maker === payload.maker)
  if (existingMaker) {
    const existingProduct = existingMaker.products.find((product) => product.id === payload.id)

    if (existingProduct) {
      existingMaker.products.map((product) =>
        product.id === payload.id ? { ...product, quantity: product.quantity++ } : product
      )
    }

    if (!existingProduct) {
      const newProductForMaker = makeNewProduct(payload)

      existingMaker.products = [...existingMaker.products, newProductForMaker]
    }

    return initialState
  }

  const newCartProduct = makeNewProduct(payload)

  return [...initialState, { maker: payload.maker, products: [newCartProduct] }]
}
