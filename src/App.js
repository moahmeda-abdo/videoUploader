import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoUploader from "./pages/VideoUploader";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/uploader" element={<VideoUploader />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
