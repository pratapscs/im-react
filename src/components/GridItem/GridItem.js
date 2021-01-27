import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';


function GridItem({bgColor, xs, sm, md, lg, padding, ...props}) {
    return (
        <Fragment>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} style={{background:bgColor, padding:padding,}}>
                {props.children}   
            </Grid>
        </Fragment>
    )
}
GridItem.prototypes = {
    bgColor: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    padding: PropTypes.string,
};
GridItem.defaultProps = {
    bgColor: '#FFF',
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    padding: '0',
}

export default GridItem;
