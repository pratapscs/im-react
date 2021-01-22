import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden',
  },
};

const IMCard = React.forwardRef(function Card(props, ref) {
  const { classes, className, raised = false, ...other } = props;

  return (
    <Paper
      className={clsx(classes.root, className)}
      elevation={raised ? 8 : 1}
      ref={ref}
      {...other}
    />
  );
});

IMCard.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool,
};

const StyledCard = withStyles(styles, { name: 'MuiGrid' })(IMCard);

export default IMCard;