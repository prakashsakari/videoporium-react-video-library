export const categoryReducer = (state, { type, payload }) => {
    switch (type) {
      case "CATEGORY":
        return {
          ...state,
          selectedCategory: payload
        };
  
      default:
        return state;
    }
  };
  