import React, { Fragment } from "react";
import { IMAvatar } from 'im_react_service'

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