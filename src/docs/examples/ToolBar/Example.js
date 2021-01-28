import React, { Fragment } from 'react';
import ToolBar from 'im-react/ToolBar';
import IMAvatar from 'im-react/IMAvatar';

export default function ToolBarExample() {

  const profileClicked = (event) => {
    alert("Profile Clicked!!");
  }

  const toolBarClicked = (event) => {
    const id = event.target.id;
    alert(id);
  };

  return (
    <Fragment>
      <ToolBar>
        <IMAvatar onClick={profileClicked} margin="17px 17px 64px 17px" variant="circular" />
        <IMAvatar onClick={toolBarClicked} id="1">M</IMAvatar>
        <IMAvatar onClick={toolBarClicked} id="2">V</IMAvatar>
      </ToolBar>
    </Fragment>
  );
}
