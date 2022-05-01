import "./Category.css";
import { useCategory } from "../../context";

export const Category = ({ category }) => {
  const { categoryName, videoCategory } = category;
  const { categoryDispatch, selectedCategory } = useCategory();

  return <button className={`${
    videoCategory === selectedCategory ? "selected" : ""
  } button chip`} onClick={() =>
    categoryDispatch({
      type: "CATEGORY",
      payload: videoCategory
    })
  }>{categoryName}</button>;
};
