import React, {useEffect} from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//import { GridColumnsToolbarButton } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
// function createData(id, title, description, status, totalTasks, actions) {
//   return {
//     id,
//     title,
//     description,
//     status,
//     totalTasks,
//     actions, 
//     tasks: [
//       { taskId: '2020-01-05', taskTitle: '11091700', taskDesc: 3, taskPriority: 'low', taskStatus: 'TO DO' },
//     ],
//   };
// }
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
 // const [tasks, setTasks] = React.useState([]);

//   const getTasks = (id) => {
//     const id = row.id;
//     axios.get("http://localhost:8080/api/projects/"+id+"/tasks").then((response) =>{console.log(response.data);
//   });
// }
// useEffect(() => {
   
//   getTasks(id);
// }, [])

  const deleteProject = (id) => {
    axios.delete("http://localhost:8080/api/projects/"+id).then((response) =>{props.getProjects();
  });
  }

  // const editProject = (id) => {
  //   axios.put("http://localhost:8080/api/projects/" + id).then((response) => {
  //     props.history.push('/');
     
  // });
  // }

  
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <Link to={`/api/projects/${row.id}/tasks`} style={{ textDecoration: 'none' }}><TableCell component="th" scope="row">
          {row.projectName}
        </TableCell></Link>
        {/* <TableCell component="th" scope="row">
          {row.projectName}
        </TableCell> */}
        <TableCell>{row.projectDescription}</TableCell>
        <TableCell>{row.projectStatus}</TableCell>
        <TableCell>{row.taskCount}</TableCell>
        <TableCell>{row.undoneTaskCount}</TableCell>
        <TableCell>
         <Link to={`/api/projects/${row.id}`} style={{ textDecoration: 'none' }}><Button variant="contained">Regaduoti</Button></Link>
          <span> </span>
          <Button variant="contained" color="secondary" onClick={(id) => { if (window.confirm('Ar tikrai norite ištrinti projektą?')) deleteProject(row.id)}}>Ištrinti</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Užduotys
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Pavadinimas</TableCell>
                    <TableCell>Aprašymas</TableCell>
                    <TableCell>Prioritetas</TableCell>
                    <TableCell>Būsena</TableCell>
                    <TableCell>Veiksmai</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tasks&&row.tasks.map((tasksRow) => (
                    <TableRow key={tasksRow.taskName}>
                      <TableCell component="th" scope="row">{tasksRow.taskName}</TableCell>
                      <TableCell>{tasksRow.taskDescription}</TableCell>
                      <TableCell>{tasksRow.taskPriority}</TableCell>
                      <TableCell>{tasksRow.taskStatus}</TableCell>
                      <TableCell>{tasksRow.taskStatus}</TableCell>
                      <TableCell>
                        <span> </span>
                        <Tooltip title="add">
                          <IconButton aria-label="add">
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton aria-label="edit" color="primary">
                           <EditIcon/>
                          </IconButton>
                        </Tooltip>
                        <span> </span>
                        <Tooltip title="Delete">
                          <IconButton aria-label="delete" color="secondary">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// Row.propTypes = {
//   row: PropTypes.shape({
//     title: PropTypes.number.isRequired,
//     status: PropTypes.number.isRequired,
//     description: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     id: PropTypes.string.isRequired,
//     totalTasks: PropTypes.number.isRequired,
//   }).isRequired,
// };
// const projects = [
//   createData('Frozenn yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
// const rows = [
//   createData()
// ]
export default function CollapsibleTable() {
  const [projects, setProjects] = React.useState([]);
  const getProjects = () => {
    axios.get("http://localhost:8080/api/projects")
      .then(response => {
        console.log(`response`, response)
        setProjects(response.data);
       
      });
    }
  //   ProjectsService.getProjects().then(response=>setProjects(response.data))
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  useEffect(() => {
   
    getProjects();
  }, []);

  return (
 
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pavadinimas</TableCell>
            <TableCell>Aprašymas</TableCell>
            <TableCell>Būsena</TableCell>
            <TableCell>Viso užduočių</TableCell>
            <TableCell>Neįvykdyta</TableCell>
            <TableCell>Veiksmai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {projects&&projects.map((p) => (
            <Row key={p.id} row={p} getProjects={getProjects} />
          ))}
        </TableBody>
      </Table>
      </TableContainer>
     
  );
      
}