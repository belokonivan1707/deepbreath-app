export const changeIsLikedProperty = (products, id) => {
  const existingID = products.find((product) => product.id === id)

  if (existingID) {
    return products.map((product) => {
      if (product.id === id) {
        return { ...product, isLiked: (product.isLiked = !existingID.isLiked) }
      }

      return product
    })
  }

  return [...products]
}

export const changeProductRating = (products, { starId, id }) => {
  const foundProduct = products.find((product) => product.id === id)

  if (foundProduct) {
    return products.map((product) => {
      if (product.id === id) {
        return { ...product, rating: starId }
      }

      return product
    })
  }

  return [...products]
}
