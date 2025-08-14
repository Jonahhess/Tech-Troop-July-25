export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, { ...action.product, id: Date.now() }],
        total: state.total + action.product.price,
        itemCount: state.itemCount + 1,
      };
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.id);
      const removedItem = state.items.find((item) => item.id === action.id);
      return {
        ...state,
        items: newItems,
        total: state.total - removedItem.price,
        itemCount: state.itemCount - 1,
      };
    }
    case "CLEAR_CART": {
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    }
    default: {
      throw new Error(`cannot reduce on ${action.type}`);
    }
  }
}
