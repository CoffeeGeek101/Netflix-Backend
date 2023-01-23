import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import Graph from "../../components/graph/Graph";
import style from "./home.css";
import axios from "axios";
import { useMemo } from "react";

export default function Home() {
  const MONTHS = useMemo(()=> [
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
  ],
    []
  );

    const [userStat, setUserStat] = useState([]);

    useEffect(()=>{
      const userStats = async()=>{
        try{
          const res = await axios.get("/users/stats", {
            headers :{
              token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E4NGVkZTkzNjY0NDU5ZmE3MzIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzMTE3OSwiZXhwIjoxNjc0NjYzMTc5fQ.UFqMsafptsCwiC0S_Z_dsWTVhNSeOwnPEHGwRADTKzs",
            },
          });
          const statsList = res.data.sort(function (a, b) {
            return a._id - b._id;
          });
          statsList.map((e)=>{
            setUserStat((prev)=> 
               [...prev, {name:MONTHS[e._id-1], "New User":e.total},]
          )
          });
        }catch(err){
          console.log(err);
        }
      }
      userStats();
    },[MONTHS]);

  return (
    <div className='home'>
        <div className="home-container">
            <Featured/>
            <Graph data={userStat} dataKey="New User"/>
        </div>
    </div>
  )
}
