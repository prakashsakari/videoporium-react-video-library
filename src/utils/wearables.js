export const getWearables = (videos, selectedCategory) =>
  videos.filter((video) => video.category === selectedCategory);
