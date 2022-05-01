export const getLaptops = (videos, selectedCategory) =>
  videos.filter((video) => video.category === selectedCategory);
