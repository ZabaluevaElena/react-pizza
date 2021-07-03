
const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART":
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCounte = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount: totalCounte,
        totalPrice: totalPrice,
      };
    case "CLEAR_CART":
      return { items: {}, totalPrice: 0, totalCount: 0 };

    case "REMOVE_CART_ITEM":
      const keysItems = Object.keys(state.items);
      const keysNewItems = keysItems.filter(
        (keysItems) => keysItems != [action.payload]
      );
      console.log(action.payload);
      console.log(keysItems);
      console.log(keysNewItems);
      const remainPizzasObj = Object.fromEntries(
        keysNewItems.map((key) => [key, state.items[key]])
      );

      const currentTotalPrice = state.items[action.payload].totalPrice;
      const currentTotalCount = state.items[action.payload].items.length;

      return {
        ...state,
        items: remainPizzasObj,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice,
      };

    case "PLUS_ITEM":

      const newPlusItem = [...state.items[action.payload].items, state.items[action.payload].items[0]]

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload] : {
            items : newPlusItem,
            totalPrice: getTotalPrice(newPlusItem)
          }
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + state.items[action.payload].items[0].price
        }    

    case "MINUS_ITEM":

      const oldItems = state.items[action.payload].items;
      const newMinusItem = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      const itemsMinus = {
        ...state.items,
          [action.payload] : {
          items : newMinusItem,
          totalPrice: getTotalPrice(newMinusItem)
          }
      }

      return {
        ...state,
        items: itemsMinus,
        totalCount: Object.keys(itemsMinus).reduce(
          (sum, key) => itemsMinus[key].items.length + sum,
          0
        ),
        totalPrice: Object.keys(itemsMinus).reduce(
          (sum, key) => itemsMinus[key].totalPrice + sum,
          0   
        )  
      }

    default:
      return state;
  }
};

export default cart;
