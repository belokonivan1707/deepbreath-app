export const quantityProducts = (array) => {
  if (array.length) {
    let count = 0
    array.map((el) => (el ? count++ : null))

    return count
  }
}
