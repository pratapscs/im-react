import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IMDrawer from "im-react/IMDrawer";
import IMAvatar from "im-react/IMAvatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MessageIcon from '@material-ui/icons/Message';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Grid, ListItemAvatar } from "@material-ui/core";

const drawerWidth = 100;
const drawerHeight = "100vh";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    maxWidth: 70
  },
  paper: {
    background: "#304669",
    height: drawerHeight,
  } 
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Grid>
      <IMDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <List className={classes.paper}>
          <ListItemAvatar>
            <IMAvatar />
          </ListItemAvatar>
          <ListItem>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VideoCallIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </IMDrawer>
    </Grid>
    
  );
}