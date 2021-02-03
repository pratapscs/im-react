import 'date-fns';
import React, { Fragment } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
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

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
        // <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //     <Grid container justify="space-around">
        //         <KeyboardTimePicker
        //             margin={margin}
        //             id={id}
        //             label={label}
        //             value={selectedDate}
        //             onChange={handleDateChange}
        //             KeyboardButtonProps={{
        //                 'aria-label': 'change time',
        //             }}
        //             placeholder={placeholder}
        //             width={width}
        //             height={height}
        //             fullWidth={fullWidth}
        //             variant={variant}
        //         />
        //         {props.children}
        //     </Grid>
        // </MuiPickersUtilsProvider>
    );
}
IMTimePicker.defaultProps = {
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.string,
    margin: PropTypes.string,
    variant: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any,
    // label: PropTypes.string,
    // onChange: PropTypes.func,
    // width: PropTypes.string,
    // height: PropTypes.string,
    // value: PropTypes.any,
    // children: PropTypes.node,


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