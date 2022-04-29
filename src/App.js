import "./App.css";
import { Home, SingleVideo, Liked, WatchLater } from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watchlater" element={<WatchLater />} />
    </Routes>
  );
}
