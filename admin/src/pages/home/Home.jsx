import Featured from "../../components/featured/Featured";
import Graph from "../../components/graph/Graph";
import {userData} from "../../dummyData";
import style from "./home.css";

export default function home() {
  const MONTHS = 
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
  return (
    <div className='home'>
        <div className="home-container">
            <Featured/>
            <Graph data={userData} dataKey="active user"/>
        </div>
    </div>
  )
}
