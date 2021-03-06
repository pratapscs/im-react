import React from "react";
import PropTypes from "prop-types";
import iconPath from "../IMIcon/IconLib";

const defaultStyles = { display: "inline-block", verticalAlign: "middle", padding:"5px"};

function IMIcon  ({size, color, icon, className, style, viewBox})  {
  const styles = { ...defaultStyles, ...style };
  
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path fill={color} d={iconPath[icon]} />
      {/* <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/> */}
    </svg>
    
  );
};

IMIcon.defaultProps = {
  size: 35,
  color: "#7c8d9d",
  viewBox: "0 0 24 24",
  style: {

  },
  className: "",
};

IMIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default IMIcon;