import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({
    htmlId,
    name,
    type,
    icon,
    size,
    classname,
    onClick,
    children,
    ...props
}) => {

    const myClass = classNames('btn mg-button', {
        [size]: size,
        [classname]: classname
    });

    return (
        <button
            className={myClass}
            id={htmlId}
            name={name}
            type={type}
            icon={icon}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'submit',
    children: 'Submit',
    size: '',
    classname: ''
};

/*
    variant, href, as, type, value, size, block, active, disabled, onClick
*/

Button.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input type */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),

    /** Function to call onClick */
    onClick: PropTypes.func.isRequired,

    icon: PropTypes.string,

    /** Child component to display next to the input */
    children: PropTypes.node,

    /** Size classname to use for different sizes */
    size: PropTypes.string,

    /** Any additional classnames to add to it */
    classname: PropTypes.string
};

export default Button;
