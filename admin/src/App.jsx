import style from "./app.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./pages/login/Login";
import LayoutLog from "./layout/LayoutLog";
import LayoutNav from "./layout/LayoutNav";
import LayoutFiles from "./layout/LayoutFiles";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

export default function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
        <Routes>
            <Route element={user ? <Navigate to="/"/> : <LayoutLog/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
            <Route element={<LayoutNav/>}>
            <Route exact path="/"/>
            </Route>
            <Route element={<LayoutFiles/>}>
            <Route path="/files"/>
            </Route>
        </Routes>
    </Router>
  );
}
