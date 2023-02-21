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
            isComplete: false,
          },
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "COMPLETE_ITEM":
        return {
            ...state,
            items: state.items.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        isComplete: !item.isComplete,
                    };
                }
                return item;
            }),
        };
        

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
