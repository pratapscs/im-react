import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import IMIcon from '../IMIcon';
import './im-icon-button.css';

function IMIconButton({ id, type, icon, bgColor, color, size, ariaLabel, disabled, edge, margin, onClick }) {
    return (
        <Fragment>
            <IconButton className="im-icon-button" type={type} disabled={disabled} aria-label={ariaLabel} edge={edge} id={id} onClick={onClick} style={{ backgroundColor: bgColor, color: color, margin: margin, padding: `${size / 2}px` }}>
                <IMIcon icon={icon} size={Number(`${size}`) + 15} color={color} />
            </IconButton>
        </Fragment>
    )
}
IMIconButton.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    ariaLabel: PropTypes.string,
    disabled: PropTypes.bool,
    edge: PropTypes.oneOf(['start', 'end', 'false']),
    margin: PropTypes.string,
    onClick: PropTypes.func,

}

IMIconButton.defaultProps = {
    size: 18,
    color: '#304669',
    type: 'button',
    margin: '1px',
}

export default IMIconButton;
