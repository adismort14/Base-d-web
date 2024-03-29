import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sign from "./pages/Sign";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Upload from "./pages/Upload";
// import Uploading from "./pages/Uploading";
// import Uploaded from "./pages/Uploaded";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload/*" element={<Upload />} />
        <Route path="/" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}
