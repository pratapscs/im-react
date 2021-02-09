import React, { Fragment } from "react";
import IMAvatar from '../IMAvatar';

const IMProfileAvatar = ({
    user
}) => {
    return(
        <Fragment>
            <IMAvatar margin="17px 17px 64px 17px" variant="circular" src = {user ? user.profile : ''}></IMAvatar>
        </Fragment>
    );
}

export default IMProfileAvatar;