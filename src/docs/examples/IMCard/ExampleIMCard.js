import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IMCard from 'im-react/IMCard';
import IMTypography from 'im-react/IMTypography';
import IMCardContent from 'im-react/IMCardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <IMCard className={classes.root}>
      <IMCardContent>
        <IMTypography className={classes.title} >
          Word of the Day
        </IMTypography>
        <IMTypography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </IMTypography>
        <IMTypography className={classes.pos} color="textSecondary">
          adjective
        </IMTypography>
        <IMTypography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </IMTypography>
      </IMCardContent>
    </IMCard>
  );
}
