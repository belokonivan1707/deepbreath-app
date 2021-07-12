export const totalSumForSingleMaker = (array) => {
  let total = 0

  array.forEach((item) => {
    total += item.price * item.quantity
  })

  if (total < 500) {
    return total + 100
  }
  if (total >= 500) {
    return total
  }

  return total
}

export const progresBar = (array) => {
  let total = 0

  for (let i = 0; i < array.length; i++) {
    total += array[i].price * array[i].quantity

    if (total >= 500) {
      return (total = 100)
    }
  }

  return total / 5
}
