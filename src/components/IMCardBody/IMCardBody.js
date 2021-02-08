import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import './im-card-body.css';

function IMCardBody({ color, ...props }) {
    return (
        <Fragment>
            <CardContent className="im-card-body">
                {props.children}
            </CardContent>
        </Fragment>
    )
}

IMCardBody.propTypes = {
    color: PropTypes.string,
};

IMCardBody.defaultProps = {
    color: '#0000008a',
};

export default IMCardBody;

