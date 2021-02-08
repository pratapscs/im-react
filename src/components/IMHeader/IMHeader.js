import React, { Fragment } from "react";
import PropTypes from "prop-types";

function IMHeader({
  bgColor,
  color,
  width,
  height,
  margin,
  padding,
  position,
  top,
  bottom,
  left,
  right,
  display,
  alignItems,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  ...props
}) {
  return (
    <Fragment>
      <div
        className="im-header"
        style={{
          background: bgColor,
          color: color,
          width: width,
          height: height,
          margin: margin,
          padding: padding,
          position: position,
          display: display,
          border: border,
          borderTop: borderTop,
          borderRight: borderRight,
          borderBottom: borderBottom,
          lineHeight:height,
          alignItems:alignItems,
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
}

IMHeader.propTypes = {
  bgColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  display: PropTypes.string,
  border: PropTypes.string,
  borderTop: PropTypes.string,
  borderRight: PropTypes.string,
  borderBottom: PropTypes.string,
  borderLeft: PropTypes.string,
  alignItems: PropTypes.string,
};

IMHeader.defaultProps = {
  bgColor: "#FFFFFF",
  color: "#707070",
  height:"8.33%",
  borderBottom: "1px solid #ddd",
  display:'flex',
  alignItems:'center',
};

export default IMHeader;
