import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './container.module.css'


function GridContainer({ bgColor, direction, justify, alignItems, padding, margin, ...props }) {
    return (
        <Fragment>
            <Grid className={styles.container} container direction={direction} justify={justify} alignItems={alignItems} style={{ background: bgColor, padding: padding, margin: margin }} >
                {props.children}
            </Grid>
        </Fragment>
    )
}

GridContainer.prototypes = {
    bgColor: PropTypes.string,
    direction: PropTypes.string,
    justify: PropTypes.string,
    alignItems: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
};

GridContainer.defaultProps = {
    bgColor: '',
    direction: 'row',
    padding: 0,
    margin: 0
}

export default GridContainer;
