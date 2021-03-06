import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import 'date-fns';

function IMDatePicker({ margin,
    id,
    label,
    value,
    onChange,
    KeyboardButtonProps,
    placeholder,
    width,
    height,
    format,
    disableToolbar,
    variant,
    fullWidth,
    type,
    defaultValue,
    ...props }) {

    /*
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    */

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
IMDatePicker.defaultProps = {
    fullWidth: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    margin: PropTypes.string,
    variant: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
};
IMDatePicker.defaultProps = {
    id: 'id',
    type: 'date',
    margin: 'dense',
    variant: 'outlined',
    fullWidth: 'fullWidth',
    defaultValue: '02-01-2021',
};
export default IMDatePicker;