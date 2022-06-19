export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_From_Basket":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
