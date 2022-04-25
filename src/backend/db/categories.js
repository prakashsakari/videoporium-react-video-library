import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All"
  },
  {
    _id: uuid(),
    categoryName: "Trending"
  },
  {
    _id: uuid(),
    categoryName: "Smart Wearables"
  },
  {
    _id: uuid(),
    categoryName: "Smart Phones"
  },
  {
    _id: uuid(),
    categoryName: "Laptops"
  }
];
