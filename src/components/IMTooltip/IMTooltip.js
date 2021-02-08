import React from 'react';
import { Tooltip } from '@material-ui/core';
import PropTypes from "prop-types";

function IMTooltip({TransitionProps ,title, placement, arrow, ...props }) {
    return (
        <Tooltip 
            arrow 
            title={title} 
            placement={placement}>
            {props.children}
        </Tooltip>
    )
}
IMTooltip.propTypes = {
    TransitionProps: PropTypes.object,
    placement: PropTypes.string,
    title: PropTypes.string,
    arrow: PropTypes.bool
}
IMTooltip.defaultProps = {
    placement: 'right',
    title: 'Tooltip',
    arrow: true,
}

export default IMTooltip