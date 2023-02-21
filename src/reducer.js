const initialState = {
  current_id: 0,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        current_id: state.current_id + 1,
        items: [
          ...state.items,
          {
            id: state.current_id + 1,
            name: action.item,
          },
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
