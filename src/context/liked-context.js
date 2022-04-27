import { createContext, useContext, useReducer } from "react";
import { likedReducer } from "../reducer";

const LikedContext = createContext();

const LikedProvider = ({ children }) => {
  const [liked, likedDispatch] = useReducer(likedReducer, { likedVideos: [] });
  return (
    <LikedContext.Provider value={{ liked, likedDispatch }}>
      {children}
    </LikedContext.Provider>
  );
};

const useLiked = () => useContext(LikedContext);

export { useLiked, LikedProvider };
