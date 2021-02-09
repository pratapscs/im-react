import 'date-fns';
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function IMTimePicker({ margin,
    id,
    label,
    value,
    onChange,
    KeyboardButtonProps,
    placeholder,
    width,
    height,
    fullWidth,
    variant,
    type,
    defaultValue,
    ...props }) {

    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <TextField
                    fullWidth={fullWidth}
                    id={id}
                    type={type}
                    margin={margin}
                    variant={variant}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="form-control"
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    {props.children}
                </TextField>
            </form>
        </Fragment>
    );
}
IMTimePicker.defaultProps = {
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.string,
    margin: PropTypes.string,
    variant: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any
};
IMTimePicker.defaultProps = {
    id: 'id',
    type: 'time',
    margin: 'dense',
    variant: 'outlined',
    fullWidth: 'fullWidth',
    defaultValue: '10:20',
};
export default IMTimePicker;