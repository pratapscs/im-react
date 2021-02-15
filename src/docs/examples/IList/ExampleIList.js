import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IList from "im-react/IList";
//import IMListItem from "im-react/IMListItem";
//import IMListItemAvatar from "im-react/IMListItemAvatar";
//import IMListItemText from "im-react/IMListItemText";
import {ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
//import IMAvatar from "im-react/IMAvatar";
import Avatar from '@material-ui/core/Avatar';

const listWidth = 100;
const listHeight = "100vh";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: listWidth,
    flexShrink: 0,
    maxWidth: 60
  },
  paper: {
    background: "#304669",
    height: listHeight,
  } 
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <IList  className={classes.list}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper
    }}
    anchor="left">
    <ListItem>
        <ListItemAvatar>
        <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Ramesh" secondary="Jan 20, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Vinod Chowdary" secondary="Jan 22, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Atif" secondary="Jan 21, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Nani" secondary="Jan 20, 2021" />
      </ListItem> 
    </IList>
  );
}
