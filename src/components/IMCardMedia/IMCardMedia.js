import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import './im-card-media.css'


function IMCardMedia({ title, path, ...props }) {
    return (
        <Fragment>
            <CardMedia
                className="im-card-media"
                image={path}
                alt={title}
                title={title}
            />
        </Fragment>
    )
}
IMCardMedia.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,

};
export default IMCardMedia;

