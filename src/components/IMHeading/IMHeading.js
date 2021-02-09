import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function IMHeading({ text, color, fontSize, fontWeight, fontFamily, textAlign, margin, padding, onClick }) {
    return (
        <div style={{ margin: margin, padding: padding }} onClick={onClick}>
            <Typography variant="h4" component="h4" style={{ color: color, fontSize: fontSize, fontWeight: fontWeight, fontFamily: fontFamily, textAlign: textAlign }}>
                {text}
            </Typography>
        </div>
    )
}

IMHeading.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    textAlign: PropTypes.string,
    onClick: PropTypes.func,
};

IMHeading.defaultProps = {
    color: '#304669',
    fontSize: '26px',
    margin: '0 16px'
};

export default IMHeading;
