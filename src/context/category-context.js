import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [{ selectedCategory, tag }, categoryDispatch] = useReducer(categoryReducer, {
    selectedCategory: "all",
    tag: ""
  });
  return (
    <CategoryContext.Provider value={{ selectedCategory, tag, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
