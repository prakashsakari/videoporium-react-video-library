import "./Category.css";
import { useCategory } from "../../context";

export const Category = ({ category }) => {
  const { categoryName, videoCategory } = category;
  const { categoryDispatch, selectedCategory } = useCategory();

  const handleClick = () => {
    categoryDispatch({
      type: "CATEGORY",
      payload: videoCategory
    })
  }

  return <button className={`${
    videoCategory === selectedCategory ? "selected" : ""
  } button chip`} onClick={handleClick}>{categoryName}</button>;
};
