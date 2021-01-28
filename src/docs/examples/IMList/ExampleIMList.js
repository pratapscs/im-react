import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import List from '@material-ui/core/List';
import IMList from "im-react/IMList";
import IMListItem from "im-react/IMListItem";
import IMListItemAvatar from "im-react/IMListItemAvatar";
import IMListItemText from "im-react/IMListItemText";
//import {ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import IMAvatar from "im-react/IMAvatar";

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
    <IMList  className={classes.list}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left">
      <IMListItem ContainerComponent='li'>
        <IMListItemAvatar>
        <IMAvatar/>
        </IMListItemAvatar>
        <IMListItemText primary="Vinay" secondary="Jan 22, 2021" />
      </IMListItem>
      <IMListItem ContainerComponent='li'>
        <IMListItemAvatar>
        <IMAvatar/>
        </IMListItemAvatar>
        <IMListItemText primary="Harshitha" secondary="Jan 21, 2021" />
      </IMListItem>
      {/* <ListItem>
        <ListItemAvatar>
        <IMAvatar/>
        </ListItemAvatar>
        <ListItemText primary="Ramesh" secondary="Jan 20, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <IMAvatar/>
        </ListItemAvatar>
        <ListItemText primary="Vinod Chowdary" secondary="Jan 22, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <IMAvatar/>
        </ListItemAvatar>
        <ListItemText primary="Atif" secondary="Jan 21, 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <IMAvatar/>
        </ListItemAvatar>
        <ListItemText primary="Nani" secondary="Jan 20, 2021" />
      </ListItem> */}
    </IMList>
  );
}
