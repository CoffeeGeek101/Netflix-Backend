import style from "./app.css";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Manager from "./pages/manager/Manager";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <div>
        <Topbar/>
        <div className="app-interface">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/files" element={<Manager/>}/>
        </Routes>
        </div>
    </div>
    </Router>
  );
}
