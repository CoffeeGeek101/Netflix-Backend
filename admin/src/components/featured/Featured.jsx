import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import style from "./featured.css";

export default function () {
  return (
    <div className='featured'>
        <div className='featured-container'>
            <div className='f-ele'>
                <h2 className="f-header">Total Users</h2>
                <div className="header-con">
                <span className="f-des">100</span>
                <KeyboardDoubleArrowUp sx={{color:"green", fontSize:"30px"}}/>
                </div>
                <img className="net-logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"/>
            </div>
            <div className='f-ele'>
                <h2 className="f-header">New Users</h2>
                <div className="header-con">
                <span className="f-des">100</span>
                <KeyboardDoubleArrowUp sx={{color:"green", fontSize:"30px"}}/>
                </div>
                <img className="net-logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"/>
            </div>
            <div className='f-ele'>
                <h2 className="f-header">Active User</h2>
                <div className="header-con">
                <span className="f-des">100</span>
                <KeyboardDoubleArrowUp sx={{color:"green", fontSize:"30px"}}/>
                </div>
                <img className="net-logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"/>
            </div>
        </div>
    </div>
  )
}
