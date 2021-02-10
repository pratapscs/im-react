import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';


function IMRadioGroup({gendername, value, onChange,defaultValue,...props}) {
    return (
        <Fragment>
            <RadioGroup
                name={gendername}
                onChange={onChange}
                defaultValue={defaultValue}
                value={value}
                >
                {props.children}
            </RadioGroup>
        </Fragment>
    )
}

IMRadioGroup.propTypes = {
    gendername: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    
}

export default IMRadioGroup;

