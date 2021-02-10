import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import './im_textfield.css'

function IMTextField({ htmlId, placeholder,
    fullWidth,
    type,
    margin,
    variant,
    autoComplete,
    autoFocus,
    color,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    helperText,
    id,
    label,
    onChange,
    required,
    size,
    value,
    select,
    ...props }) {
    return (
        <Fragment>

            <form noValidate autoComplete="off">
                <TextField
                    id={htmlId}
                    placeholder={placeholder}
                    fullWidth={fullWidth}
                    type={type}
                    margin={margin}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant={variant}
                    className="form-control"
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    color={color}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    error={error}
                    FormHelperTextProps={FormHelperTextProps}
                    helperText={helperText}
                    label={label}
                    onChange={onChange}
                    required={required}
                    size={size}
                    value={value}
                    select={select}
                >
                    {props.children}
                </TextField>
            </form>
        </Fragment>
    )
}

IMTextField.propTypes = {
    htmlId: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    margin: PropTypes.string,
    variant: PropTypes.string,
    autoComplete: PropTypes.bool,
    autoFocus: PropTypes.bool,
    color: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    FormHelperTextProps: PropTypes.object,
    helperText: PropTypes.node,
    label: PropTypes.node,
    onChange: PropTypes.func,
    required: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.any,
    select: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'time', 'date', 'radio', 'checkbox']),
}

IMTextField.defaultProps = {
    placeholder: 'Enter Title',
    fullWidth: 'fullWidth',
    type: 'text',
    margin: 'dense',
    variant: 'outlined',
};
export default IMTextField;

