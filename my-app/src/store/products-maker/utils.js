export const changeIsLikedProperty = (makers, id) => {
  const makerIsFound = makers.find((maker) => maker.id === id);

  if (makerIsFound) {
    return makers.map((maker) => {
      if (maker.id === id) {
        return maker.isLiked === true
          ? { ...maker, isLiked: (maker.isLiked = false) }
          : { ...maker, isLiked: (maker.isLiked = true) };
      }
      return maker;
    });
  }

  return [...makers];
};
