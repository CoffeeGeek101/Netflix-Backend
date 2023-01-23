import style from "./topbar.css"
import {CircleNotifications, Settings, Telegram} from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="top-container">
            <h1 className='logo'>PopAdmin</h1>
            <div className='topbar-element'>
                <CircleNotifications sx={{fontSize:"32px"}}/>
                <Telegram sx={{fontSize:"32px"}}/>
                <Settings sx={{fontSize:"32px"}}/>
                <img className='user-dp' src="https://flxt.tmsimg.com/assets/p16787843_i_h9_ab.jpg" />
            </div>
        </div>
    </div>
  )
}
