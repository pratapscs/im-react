import React from 'react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';

function IMCheckbox({ checked, checkedIcon, color, disabled, disableRipple, icon, id, inputProps, required, size, indeterminate, indeterminateIcon, onChange, value, ...props }) {
    return (
        <Fragment>
            <Checkbox
                checked={checked}
                checkedIcon={checkedIcon}
                color={color}
                disabled={disabled}
                disableRipple={disableRipple}
                icon={icon}
                id={id}
                inputProps={inputProps}
                required={required}
                size={size}
                indeterminate={indeterminate}
                indeterminateIcon={indeterminateIcon}
                onChange={onChange}
                value={value}
            >
                {props.children}
            </Checkbox>
        </Fragment>
    )
}

IMCheckbox.propTypes = {
    checked: PropTypes.bool,
    checkedIcon: PropTypes.node,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    required: PropTypes.bool,
    size: PropTypes.string,
    indeterminate: PropTypes.bool,
    indeterminateIcon: PropTypes.node,
    onChange: PropTypes.string,
    value: PropTypes.any,
}

export default IMCheckbox;

