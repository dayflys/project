import MainPageComponent from "./main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UploadPage from "./upload";
import Productpage from "./submain";

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<MainPageComponent />} />
      <Route path="/products/:id" element={<Productpage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  </div>); 
}

export default App;
