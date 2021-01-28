import React from 'react';
import IMAvatar from 'im-react/IMAvatar';

/** Custom message */
export default function IMAvatarExample() {
  const toolBarClicked = (event) => {
    const id = event.target.id;
    alert(id);
  };
  return (
    <div>
      <IMAvatar onClick={toolBarClicked} id="1" margin="17px">M</IMAvatar>
      <IMAvatar onClick={toolBarClicked} id="2" margin="17px">V</IMAvatar>
      <IMAvatar onClick={toolBarClicked} id="3" margin="17px">C</IMAvatar>
      <IMAvatar onClick={toolBarClicked} id="4" margin="17px">W</IMAvatar>
      <IMAvatar onClick={toolBarClicked} id="5" margin="17px">S</IMAvatar>
    </div>
  );
}