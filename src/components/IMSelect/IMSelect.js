import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './im_select.css'

function IMSelect({ id,
    value,
    placeholder,
    onChange,
    defaultValue,
    autoWidth,
    displayEmpty,
    IconComponent,
    input,
    label,
    labelId,
    labelWidth,
    variant,
    fullWidth,
    margin,
    select,
    type,
    ...props }) {

    const [attendees, setAttendees] = React.useState('1');

    const handleChange = (event) => {
        setAttendees(event.target.value);
    };

    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <TextField
                    id="List of attendees"
                    value={attendees}
                    placeholder={placeholder}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    autoWidth={autoWidth}
                    fullWidth={fullWidth}
                    variant={variant}
                    margin={margin}
                    displayEmpty={displayEmpty}
                    IconComponent={IconComponent}
                    input={input}
                    label={label}
                    labelId={labelId}
                    labelWidth={labelWidth}
                    className="form-control"
                    select={select}
                    type={type}
                >
                    {props.children}
                    <MenuItem value={10}>London</MenuItem>
                    <MenuItem value={20}>USA</MenuItem>
                    <MenuItem value={30}>America</MenuItem>
                </TextField>
            </form>
        </Fragment >
    )
}

IMSelect.propTypes = {
    id: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.string,
    defaultValue: PropTypes.any,
    autoWidth: PropTypes.bool,
    displayEmpty: PropTypes.bool,
    IconComponent: PropTypes.elementType,
    input: PropTypes.element,
    label: PropTypes.node,
    labelId: PropTypes.string,
    labelWidth: PropTypes.number,
    variant: PropTypes.string,
    fullWidth: PropTypes.string,
    margin: PropTypes.string,
    select: PropTypes.string,
    type: PropTypes.string,

}
IMSelect.defaultProps = {

    value: 'user1',
    fullWidth: 'fullWidth',
    margin: 'dense',
    variant: 'outlined',
    select: 'select',
};
export default IMSelect;

