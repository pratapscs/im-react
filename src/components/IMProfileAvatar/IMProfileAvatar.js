import React, { Fragment } from "react";
import IMAvatar from '../IMAvatar';

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