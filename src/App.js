import "./App.css";
import { Home, SingleVideo, Liked, WatchLater, History } from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
