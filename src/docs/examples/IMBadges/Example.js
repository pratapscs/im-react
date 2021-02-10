import React, { Fragment } from 'react';
import IMBadges from 'im-react/IMBadges';
import IMIcon from 'im-react/IMIcon';
import IMAvatar from 'im-react/IMAvatar';


function Example() {
  return (
    <Fragment>
      <IMBadges color="secondary" variant="dot" badgeContent={4} bgColor="#cdcdcd" >
        <IMAvatar variant="circle" margin="0"></IMAvatar>
      </IMBadges><br /><br />

      <IMBadges badgeContent={999} color="secondary"><IMIcon icon="chat"></IMIcon></IMBadges><br /><br />

      <IMBadges badgeContent={4} color="primary">
        <IMAvatar variant="circle" margin="0" bgColor="orange" >S</IMAvatar>
      </IMBadges><br /><br />
    </Fragment>
  );
}
export default Example;