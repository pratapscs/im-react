import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';


function GridItem({bgColor, xs, sm, md, lg, xl, padding, margin, display, justify, alignItems, textAlign, float, ...props}) {
    return (
        <Fragment>
            <Grid 
                item 
                xs={xs} 
                sm={sm} 
                md={md} 
                lg={lg}
                xl={xl} 
                style={{
                    background:bgColor, 
                    padding:padding,
                    margin:margin,
                    display:display,
                    justify:justify,
                    alignItems:alignItems,
                    textAlign:textAlign,
                    float:float
                }}>
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
    xl: PropTypes.number,
    padding: PropTypes.string,
    margin: PropTypes.string,
    display: PropTypes.string,
    justify: PropTypes.string,
    alignItems: PropTypes.string,
    textAlign: PropTypes.string,
    float: PropTypes.string
};

GridItem.defaultProps = {
    xs: 12,
    padding: '0',
    margin: '0',
};

export default GridItem;
