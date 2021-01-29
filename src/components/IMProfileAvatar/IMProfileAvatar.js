import React, { Fragment } from "react";
import IMAvatar from 'im-react/IMAvatar';

const IMProfileAvatar = ({
    user
}) => {
    return(
        <Fragment>
            <IMAvatar variant="circular" src = {user ? user.profile : ''}></IMAvatar>
        </Fragment>
    );
}

export default IMProfileAvatar;