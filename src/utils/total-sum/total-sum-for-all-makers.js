export const totalSumForAllMakers = (array) => {
  let totalSumForAllMakers = 0

  array.forEach((maker) => {
    let totalSingleMaker = 0
    maker.products.forEach((product) => {
      totalSingleMaker += product.price * product.quantity
    })

    if (totalSingleMaker < 500) {
      totalSumForAllMakers += totalSingleMaker + 100
    }

    if (totalSingleMaker >= 500) {
      totalSumForAllMakers += totalSingleMaker
    }
  })

  return totalSumForAllMakers
}
