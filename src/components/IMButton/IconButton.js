import React from 'react'
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";

function IconButton({ variant, color, size, disabled, text, href, id, backgroundColor , onClick, icon, ...props}) {
    return (
        <div  style={{margin:'10px'}}>
            <Button
                variant={variant}
                size={size}
                disabled={disabled}
                text={text}
                href={href}
                id={id}
                onClick={onClick}
                style={{
                    backgroundColor,
                    color,
                  }}
            >
                {props.children}
               {icon}
            </Button>
        </div>
    )
}
IconButton.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    href: PropTypes.string,
    id: PropTypes.any,
    onClick: PropTypes.func,
    backgroundColor : PropTypes.string,
    icon: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
    variant: 'contained',
    color:'#ffffff',
    size:'',
    backgroundColor :'#36c96d'
    
  };

export default IconButton;
