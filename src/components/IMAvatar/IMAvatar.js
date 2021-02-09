import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';


function IMAvatar({id, type, bgColor, color, width, height, margin, padding, borderRadius, variant, src, alt, onClick, ...props}) {
  return (
    <Avatar 
      style={{
        background:bgColor, 
        color:color, 
        width:width, 
        height:height, 
        margin:margin, 
        padding:padding,
        borderRadius:borderRadius
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
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'circular', 'rounded', 'square'])
};

IMAvatar.defaultProps = {
  margin: '17px',
  variant: 'square'
};

export default IMAvatar;