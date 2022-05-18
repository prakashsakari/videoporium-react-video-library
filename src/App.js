import "./App.css";
import {RequiresAuth, PlaylistVideoContainer} from "./components";
import { Home, SingleVideo, Liked, WatchLater, History, Login, SignUp, Playlists, Error } from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
      <Route path="/liked" element={<RequiresAuth><Liked /></RequiresAuth>} />
      <Route path="/watchlater" element={<RequiresAuth><WatchLater /></RequiresAuth>} />
      <Route path="/history" element={<RequiresAuth><History /></RequiresAuth>} />
      <Route path="/playlist" element={<RequiresAuth><Playlists /></RequiresAuth>} />
      <Route path="/playlist/:id" element={<RequiresAuth><PlaylistVideoContainer /></RequiresAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
