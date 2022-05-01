import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [{ selectedCategory }, categoryDispatch] = useReducer(categoryReducer, {
    selectedCategory: "all"
  });
  return (
    <CategoryContext.Provider value={{ selectedCategory, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
