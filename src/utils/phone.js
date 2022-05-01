export const getPhones = (videos, selectedCategory) =>
  videos.filter((video) => video.category === selectedCategory);
