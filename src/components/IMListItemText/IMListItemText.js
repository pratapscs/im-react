import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText } from '@material-ui/core';

function IMListItemText({primary,secondary,titleColor,...props}) {
    return (
        <div>
           <ListItemText primary={primary} secondary={secondary} titleColor={titleColor} >
                {props.children}
           </ListItemText>
        </div>
    )
}
IMListItemText.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    titleColor: PropTypes.string,
}
export default IMListItemText;

