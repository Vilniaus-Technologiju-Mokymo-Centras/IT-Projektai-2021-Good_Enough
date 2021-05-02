import React,{Component} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import axios from 'axios';



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//         alignItems: 'center',
//        backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class AddProjectForm extends Component {
  state = {
    title: "",
    description: ""
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    axios
      .post("https://60570137055dbd0017e84567.mockapi.io/grid/Books", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <textarea
            placeholder="Description" value={this.state.description}
            onChange={this.onDescriptionChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}
export default AddProjectForm;