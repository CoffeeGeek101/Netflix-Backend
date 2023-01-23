import style from "./graph.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { red } from "@mui/material/colors";
export default function Graph({data, dataKey, grid}) {
  return (
    <div className="graph">
        <div className="graph-container">
            <h2>User Analytics.</h2>
        <ResponsiveContainer width="99%" aspect={4/1}>
        <LineChart data={data}>
                <XAxis dataKey="name" stroke="red" className='xaxis'/>
                <Line type="monotone" dataKey={dataKey} stroke="red" strokeWidth={3} />
                <Tooltip stroke="red"/>
                {grid && <CartesianGrid stroke="red" strokeDasharray={5}/>}
        </LineChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}
