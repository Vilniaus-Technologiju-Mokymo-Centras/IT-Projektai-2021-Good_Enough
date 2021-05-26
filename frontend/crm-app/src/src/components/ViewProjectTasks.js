import React, {useState, useEffect} from "react";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';


export default function Project() {
//const [isLoaded,setIsLoaded] = useState(false);
    const [rowData,setRowData] = useState([]);
    useEffect(() => {
        const axios = require('axios').default;
        axios
            .get('http://localhost:8080/api/projects/id/tasks')
            .then((response) => {
//setIsLoaded(true);
            console.log(response.data);
            setRowData(response.data);
            response.data.forEach(user => {
            });
        });
    }, []);

    const columns = [
{ field: "taskName", headerName: "Pavadinimas", width: 150 },
{ field: "taskDescription", headerName: "Aprašymas ", width: 150 },
{ field: "taskPriority", headerName: "Prioritetas", width: 250 },
{ field: "taskStatus", headerName: "Statusas", width: 150 },
{ field: "taskCreated", headerName: "Sukurta", width: 150 },
{ field: "taskModified", headerName: "Atnaujinta", width: 150 },
];
    return (

<div style={{ height: 400, width: '100%' }}>
<div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <Link to={`/api/projects/`} style={{ textDecoration: 'none' }}><Button variant="contained">Grįžti</Button></Link>
<DataGrid
  columns={columns}
  rows={rowData}
  id="id"
  pageSize={15}
  
/>
</div>
</div>
    </div>


);
}
