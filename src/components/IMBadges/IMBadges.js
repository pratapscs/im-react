import React, { Fragment }  from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

function IMBadges({ badgeContent, color, component, invisible, max, overlap, showZero, variant, vertical, horizontal, bgColor, padding, margin, ...props }) {
    return (
        <Fragment>
            <Badge
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                backgroundColor={bgColor}
                badgeContent={badgeContent}
                color={color}
                component={component}
                invisible={invisible}
                max={max}
                overlap={overlap}
                showZero={showZero}
                variant={variant}
                padding={padding}
                margin={margin}
                className="styled-badges"
            >
                {props.children}

            </Badge>
        </Fragment>
    )
}

IMBadges.propTypes = {
    badgeContent: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.elementType,
    invisible: PropTypes.bool,
    max: PropTypes.number,
    overlap: PropTypes.string,
    showZero: PropTypes.bool,
    variant: PropTypes.string,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    bgColor: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
}

IMBadges.defaultProps = {

}

export default IMBadges;

