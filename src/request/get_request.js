export const getMakers = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.makers)
    .catch((error) => {
      throw error
    })
}
