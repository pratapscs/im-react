import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24,
    },
  },
};

const IMCardContent = React.forwardRef(function CardContent(props, ref) {
  const { classes, className, component: Component = 'div', ...other } = props;

  return <Component className={clsx(styles, className)} ref={ref} {...other} />;
});

IMCardContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
};

export default IMCardContent;