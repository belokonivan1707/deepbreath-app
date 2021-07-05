import { MENU_FOR_FOOD_MAKERS, MENU_EXPLORE } from "./data";

const INITIAL_STATE = {
  menuMakers: MENU_FOR_FOOD_MAKERS,
  menuExplore: MENU_EXPLORE,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default headerReducer;
