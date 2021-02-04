import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IMAvatar from '../IMAvatar';

function IMListItemAvatar() {
    return (
        <div>
            <ListItemAvatar>
                <IMAvatar></IMAvatar>
            </ListItemAvatar>
        </div>
    )
}

IMListItemAvatar.propTypes = {
}

export default IMListItemAvatar;

