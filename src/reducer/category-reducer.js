export const categoryReducer = (state, { type, payload }) => {
    switch (type) {
      case "CATEGORY":
        return {
          ...state,
          selectedCategory: payload
        };
      
      case "SEARCH":
        return {
          ...state,
          tag: payload
        };
  
      default:
        return state;
    }
  };
  