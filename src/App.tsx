import "./styles/App.scss";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ImageDetailsPage from "./pages/ImageDetailsPage";
import UserPage from "./pages/UserPage";
import ExplorePage from "./pages/ExplorePage";


function App() {
  return (
    <div className="App">
      <div className="Aesthetic">
        <div className="GridNavbar">
          <Navbar />
        </div>

        <div className="GridMain flex justify-center px-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore-similar" element={<ImageDetailsPage />} />
            <Route path="/following" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/user-profile" element={<UserPage />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
