import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import  './im-button.css';

function IMButton({ variant, bgColor, color, size, disabled, text, href, id, onClick, fullWidth, className, textTransform, ...props}) {
    const myClass = classNames('im-button', {
        [className]: className
    });
    return (
        <Fragment>
            <Button         
                variant={variant}               
                size={size}
                disabled={disabled}
                text={text}
                href={href}
                id={id}               
                onClick={onClick}
                fullWidth={fullWidth}
                className={myClass}
                style={{color:color, background:bgColor, textTransform:textTransform}}                
            >
               {props.children}
            </Button>
        </Fragment>
    )
}
IMButton.propTypes = {
    id: PropTypes.any,
    variant: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.number,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    href: PropTypes.string,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    textTransform: PropTypes.func
};

IMButton.defaultProps = {
    variant: 'contained',
    color: 'white',
    bgColor: '#1dc85d',
    size: 'medium',
    className: '', 
    textTransform: 'capitalize',
};

export default IMButton;
