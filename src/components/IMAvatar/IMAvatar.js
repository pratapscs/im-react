import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

function IMAvatar({id, type, bgColor, color, size, margin, padding, borderRadius, border, variant, src, alt, onClick, ...props}) {

  return (
    <Avatar 
      style={{
        padding:padding,
        background:bgColor, 
        color:color, 
        width:`${size}px`, 
        height:`${size}px`, 
        margin:margin,
        border:border,     
        borderRadius:borderRadius,
        fontSize:`${size - (size/2)}px`,
      }}
      id={id}
      type={type}
      src={src}
      alt={alt}
      onClick={onClick}
      variant={variant}>                   
      {props.children}
    </Avatar>
  );
}

IMAvatar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'circular', 'rounded', 'square']),
};

IMAvatar.defaultProps = {
  margin: '17px',
  variant: 'square',
};

export default IMAvatar;


