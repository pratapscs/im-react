import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import ListContext from '@material-ui/core';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    minWidth: 56,
    flexShrink: 0,
  },
  /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    marginTop: 8,
  },
};

/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 */
const IMListItemAvatar = React.forwardRef(function ListItemAvatar(props, ref) {
  const { classes, className, ...other } = props;
  const context = React.useContext(ListContext);

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.alignItemsFlexStart]: context.alignItems === 'flex-start',
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});

IMListItemAvatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

const StyledIMListItemAvatar = withStyles(styles, {name: 'MuiListItemAvatar'})(IMListItemAvatar);

export default IMListItemAvatar;
