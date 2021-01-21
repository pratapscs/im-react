import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, IconButton, Typography} from '@material-ui/core';
import {AcUnitIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
		width: 345,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}
