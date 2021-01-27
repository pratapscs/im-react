import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
import IMGrid from 'im-react/IMGrid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IMGrid container spacing={3}>
        <IMGrid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </IMGrid>
        <IMGrid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </IMGrid>
        <IMGrid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </IMGrid>
      </IMGrid>
      <IMGrid container spacing={3}>
        <IMGrid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </IMGrid>
        <IMGrid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </IMGrid>
        <IMGrid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </IMGrid>
      </IMGrid>
    </div>
  );
}
