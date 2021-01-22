import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IMDrawer from "im-react/IMDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MessageIcon from '@material-ui/icons/Message';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  toolbar: theme.mixins.toolbar
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <IMDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MessageIcon /> : <VideoCallIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </IMDrawer>
  );
}
