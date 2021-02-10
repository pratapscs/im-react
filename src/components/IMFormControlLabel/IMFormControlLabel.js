import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';

function IMFormControlLabel({ checked, control, disabled, inputRef, label, labelPlacement, onChange, value, ...props }) {
    return (
        <Fragment>
            <FormControlLabel
                checked={checked}
                control={control}
                disabled={disabled}
                inputRef={inputRef}
                label={label}
                labelPlacement={labelPlacement}
                onChange={onChange}
                value={value}
            >
                {props.children}
            </FormControlLabel>
        </Fragment>
    )
}

IMFormControlLabel.propTypes = {
    checked: PropTypes.bool,
    control: PropTypes.element,
    disabled: PropTypes.bool,
    inputRef: PropTypes.ref,
    label: PropTypes.node,
    labelPlacement: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,

}

export default IMFormControlLabel;

