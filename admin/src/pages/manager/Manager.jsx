import style from "./manager.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteSweep} from '@mui/icons-material';
import { userRows } from "../../dummyData";
export default function Manager() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'action',
          headerName: 'Action',
          width:150,
          renderCell: (params) =>{
            return(
              <>
              {/* <Link to= {"/user/"+ params.row.id} > */}
              <button className="del-btn">Edit</button>
              {/* </Link> */}
              <DeleteSweep className="del-sign" sx={{fontSize:"30px", color:"red"}}/>
              </>
            )
          }
        },
      ];
      
      
  return (
    <div className="manager">
      <h1 className="manager-title">Movies / TV-Shows</h1>
        <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{color:"black", fontWeight:"600", width:"80%", height:"60vh", border:"solid 1px"}}
      />
    </div>
  )
}
