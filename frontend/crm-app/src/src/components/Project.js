import React, {useState, useEffect} from "react";
import { DataGrid } from '@material-ui/data-grid';

export default function Project() {
//const [isLoaded,setIsLoaded] = useState(false);
const [rowData,setRowData] = useState([]);
useEffect(() => {
const axios = require('axios').default;
axios
.get('http://localhost:8080/api/projects')
.then((response) => {
//setIsLoaded(true);
console.log(response.data);
setRowData(response.data);
response.data.forEach(user => {
});
});
}, []);
const columns = [
{ field: "id", headerName: "ID", width: 10 },
{ field: "projectName", headerName: "Pavadinimas ", width: 150 },
{ field: "projectDescription", headerName: "Aprašymas", width: 250 },
{ field: "projectStatus", headerName: "Statusas", width: 150 },
{ field: "userRole", headerName: "Užduotys", width: 150 },
];
return(
<div style={{ height: 400, width: '100%' }}>
<div style={{ display: 'flex', height: '100%' }}>
<div style={{ flexGrow: 1 }}>
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
