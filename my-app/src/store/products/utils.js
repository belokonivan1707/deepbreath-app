export const changeIsLikedProperty = (products, id) => {
  const existingID = products.find((product) => product.id === id);

  if (existingID) {
    return products.map((product) => {
      if (product.id === id) {
        if (product.isLiked) {
          return { ...product, isLiked: (product.isLiked = false) };
        }

        return { ...product, isLiked: (product.isLiked = true) };
      }

      return product;
    });
  }

  return [...products];
};
