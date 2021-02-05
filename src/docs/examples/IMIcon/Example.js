import React, { Fragment } from 'react';
import IMIcon from 'im-react/IMIcon';

export default function IMIconExample() {
  return (
      <Fragment>
        <IMIcon color="blue" icon="info" />
        <IMIcon color="red" icon="warning" />
        <IMIcon color="green" icon="chat" />
        <IMIcon color="red" icon="video_call" />
        <IMIcon color="green" icon="contacts" />
        <IMIcon color="purple" icon="workbench" />
        <IMIcon color="" icon="settings" />
        <IMIcon color="indigo" icon="invite" />
        <IMIcon color="red" icon="CloseIcon" />
        <IMIcon icon="playCircleFilledIcon" />
        <IMIcon icon="playCircleOutlineIcon" />
        <IMIcon icon="editIcon" />
        <IMIcon icon="deleteIcon" />
      </Fragment>
  );
}
