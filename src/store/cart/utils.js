export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

// const makeNewProduct = (payload) => ({ ...payload, quantity: 1 })

// export const addItemToCart = (state, payload) => {
//   const initialState = [...state]

//   const isArrayHasAnyItem = initialState.length

//   if (!isArrayHasAnyItem) {
//     return [{ maker: payload.maker, products: [makeNewProduct(payload)] }]
//   }

//   const existingMaker = initialState.find((product) => product.maker === payload.maker)
//   if (existingMaker) {
//     const existingProduct = existingMaker.products.find((product) => product.id === payload.id)

//     if (existingProduct) {
//       existingMaker.products.map((product) =>
//         product.id === payload.id ? { ...product, quantity: product.quantity++ } : product
//       )
//     }

//     if (!existingProduct) {
//       const newProductForMaker = makeNewProduct(payload)

//       existingMaker.products = [...existingMaker.products, newProductForMaker]
//     }

//     return initialState
//   }

//   const newCartProduct = makeNewProduct(payload)

//   return [...initialState, { maker: payload.maker, products: [newCartProduct] }]
// }

// export const deleteItemFromCart = (initialState, payload) => {
//   const state = [...initialState]

//   let existingMakerCartItem = state.map((item, index) => {
//     if (item.maker === payload.maker) {
//       let correctItems = item.products.filter((product) => product.id !== payload.id)

//       return { ...item, products: correctItems }
//     }

//     return item
//   })

//   const newexistingMakerCartItem = existingMakerCartItem.filter((item) => {
//     console.log('work')
//     if (item.products.length < 1) {
//       return false
//     }

//     return item
//   })

//   return newexistingMakerCartItem
// }
