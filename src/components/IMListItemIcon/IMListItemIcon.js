import React from 'react';
import { ListItemIcon } from '@material-ui/core';

function IMListItemIcon({...props}) {
    return (
        <div>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
        </div>
    )
}
export default IMListItemIcon;

