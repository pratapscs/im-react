import React, { Fragment } from 'react';
import IMTextField from '../IMTextField';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import { FormLabel } from '@material-ui/core';
import IMSelect from '../IMSelect';
import IMDatePicker from '../IMDatePicker';
import IMTimePicker from '../IMTimePicker';
import IMButton from '../IMButton';
import MenuItem from '@material-ui/core/MenuItem';

function IMMeetingForm(props) {
    return (
        <Fragment>
            <GridItem xs="12">
                <GridContainer>
                    <GridItem xs={12} sm={8} lg={4}>

                        <FormLabel>Enter Title</FormLabel>
                        <IMTextField ></IMTextField>

                        <FormLabel>Select Attendees</FormLabel>
                        <IMSelect>
                            <MenuItem value={1}>Organizer</MenuItem>
                            <MenuItem value={2}>Admin</MenuItem>
                            <MenuItem value={3}>User</MenuItem>
                        </IMSelect>

                        <FormLabel>Time Zone</FormLabel>
                        <IMSelect>
                            <MenuItem value={1}>(GMT-05:00) Indiana (East)</MenuItem>
                            <MenuItem value={2}>(GMT) London</MenuItem>
                            <MenuItem value={3}>(UTC-12:00) International Date Line West</MenuItem>
                            <MenuItem value={2}>(GMT) London</MenuItem>
                        </IMSelect>

                        <FormLabel>From Date</FormLabel>
                        <IMDatePicker></IMDatePicker>

                        <FormLabel>Start Time</FormLabel>
                        <IMTimePicker></IMTimePicker>

                        <IMButton fullWidth={true} >Submit</IMButton>


                    </GridItem>
                </GridContainer>
            </GridItem>
        </Fragment>
    )
}

IMMeetingForm.propTypes = {

}

export default IMMeetingForm;

