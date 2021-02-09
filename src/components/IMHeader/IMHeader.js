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
        className="im-chat-header"
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
};

IMHeader.defaultProps = {
  bgColor: "#FFFFFF",
  color: "#707070",
  width: "100%",
  height: "75px",
  position: "relative",
  borderBottom: "1px solid #ddd",
};

export default IMHeader;
