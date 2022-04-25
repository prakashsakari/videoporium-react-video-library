import "./Category.css";

export const Category = ({ category }) => {
  const { categoryName } = category;

  return <button class="button chip">{categoryName}</button>;
};
