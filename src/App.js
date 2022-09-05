import Navbar from "./components/Navbar/Navbar";
import Rules from "./components/Rules/Rules";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mainWrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
