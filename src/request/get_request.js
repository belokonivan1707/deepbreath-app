export const getMakers = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.makers)
    .catch((error) => {
      throw error
    })
}

export const getProducts = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.products)
    .catch((error) => {
      throw error
    })
}
