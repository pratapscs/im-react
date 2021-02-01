import React from 'react';
import { ListItemSecondaryAction } from '@material-ui/core';

function IMListItemSecondaryAction({...props}) {
    return (
        <div>
             <ListItemSecondaryAction>
                 {props.children}
            </ListItemSecondaryAction>
        </div>
    )
}

export default IMListItemSecondaryAction;

