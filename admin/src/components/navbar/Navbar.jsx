import { BubbleChart, Home, TaskAlt, Whatshot } from "@mui/icons-material"
import { Link } from "react-router-dom"
import style from "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <h2>Navigate<span className="dot">.</span></h2>
            <Link to="/" className="link">
            <div className="nav-element">
                <Home/>
                <span>Home</span>
            </div>
            </Link>
            <Link to="/files" className="link">
            <div className="nav-element">
                <TaskAlt/>
                <span>Manage Files</span>
            </div>
            </Link>
            <div className="nav-element">
                <Whatshot/>
                <span>Trending</span>
            </div>
            <div className="nav-element">
            <BubbleChart/>
                <span>Analytics</span>
            </div>
        </div>
    </div>
  )
}
