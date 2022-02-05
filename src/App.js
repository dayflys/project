import MainPageComponent from "./main";
import "./App.css";
import { Route, Routes,Link } from "react-router-dom";
import UploadPage from "./upload";
import Productpage from "./submain";

function App() {
  return (
  <div>
    <div id="위쪽">
      <Link to="/">
        <div id="위쪽자리">
            <img src="/images/logo.png" alt="로고사진" title="로고사진" />
        </div>
      </Link>  
    </div>
    <Routes>
      <Route path="/" element={<MainPageComponent />} />
      <Route path="/products/:id" element={<Productpage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
    <div id="맨아래">
      <p className="글씨">이거 만드는 거</p>
      <p className="글씨">개빡센거 같기도 하고</p>
      <p className="글씨">허리 휘겠는데</p>
      <p className="글씨">계속 앉아있으니까</p>
      <p className="글씨">010-9487-0504</p>
    </div>
  </div>); 
}

export default App;
