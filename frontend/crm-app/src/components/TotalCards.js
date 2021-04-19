import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TotalCard from './TotalCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
        <Grid item xs={3}>
          <TotalCard/>
        </Grid>
        <Grid item xs={3}>
           <TotalCard/>
        </Grid>
        <Grid item xs={3}>
           <TotalCard/>
        </Grid>
        <Grid item xs={3}>
           <TotalCard/>
        </Grid>
      </Grid>
    </div>
  );
}