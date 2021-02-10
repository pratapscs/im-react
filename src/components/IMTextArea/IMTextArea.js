import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './im-textarea.css';

function IMTextArea({rows, rowsMax, rowsMin, placeholder, defaultValue, value, onChange, margin, width, height, label, resize, maxlength, readonly, required, ...props}) {
    return (
        <Fragment>
            <TextareaAutosize
            rows={rows}
            rowsMax={rowsMax}
            rowsMin={rowsMin}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            margin={margin}
            onChange={onChange}
            width={width}
            height={height}
            label={label}
            resize={resize}
            maxlength={maxlength}
            readonly={readonly}
            required={required}
            
            className="message-textarea"
            >
             {props.children}
            </TextareaAutosize>
        </Fragment>
    )
}
IMTextArea.propTypes = {
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    rowsMin: PropTypes.number,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.string,
    resize: PropTypes.string,
    maxlength: PropTypes.string,
    readonly: PropTypes.bool,
    required: PropTypes.bool  
}

IMTextArea.defaultProps = {
    placeholder: 'Type your message here',
    resize: 'none',
}

export default IMTextArea;

