export const sortByMakers = (array) => {
  const sortedProductsByMakers = []

  array.forEach((product) => {
    if (sortedProductsByMakers.length) {
      const theSameMaker = sortedProductsByMakers.find((category) => category.makerId === product.makerId)
      if (!theSameMaker) {
        sortedProductsByMakers.push({ makerId: product.makerId, maker: product.maker, products: [product] })
      }

      if (theSameMaker) {
        theSameMaker.products.push(product)
      }
    }

    if (!sortedProductsByMakers.length) {
      sortedProductsByMakers.push({ makerId: product.makerId, maker: product.maker, products: [product] })
    }
  })

  return sortedProductsByMakers
}
