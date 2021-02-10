import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Radio from '@material-ui/core/Radio';

function IMRadio({checked, onChange, value, inputname, inputProps, checkedIcon, defaultValue, color, disabled, disableRipple, icon, id, required, size, ...props}) {
    
    return (
        <Fragment>
            <Radio
                checked={checked}
                onChange={onChange}
                value={value}
                name={inputname}
                inputProps={inputProps}
                defaultValue={defaultValue}
                color={color}
                disabled={disabled}
                disableRipple={disableRipple}
                id={id}
                required={required}
                size={size}
                >
                    {props.children}
            </Radio>
        </Fragment>
    )
}

IMRadio.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.any,
    inputname: PropTypes.string,
    inputProps: PropTypes.object,
    defaultValue: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    id: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.string,
}

export default IMRadio;

