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

export const changeMakersRating = (makers, { starId, id }) => {
  const foundMaker = makers.find((maker) => maker.id === id);

  if (foundMaker) {
    return makers.map((maker) => {
      if (maker.id === id) {
        return { ...maker, rating: starId };
      }

      return maker;
    });
  }

  return [...makers];
};



