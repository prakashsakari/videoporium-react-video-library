import "./App.css";
import { Home, SingleVideo } from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
    </Routes>
  );
}
