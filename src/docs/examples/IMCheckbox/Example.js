import React, { Fragment } from 'react';
import IMCheckbox from 'im-react/IMCheckbox';
import IMFormControlLabel from 'im-react/IMFormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

export default function Example() {
    const [setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <Fragment>
            <IMCheckbox color="secondary" onChange={handleChange} checked="checked" />
            <IMCheckbox disabled checked="checked" />
            <IMCheckbox checked="checked" indeterminate="indeterminate" size="small" color="primary" /><br />

            <IMFormControlLabel control={<IMCheckbox onChange={handleChange} color="secondary" indeterminate="indeterminate" />} label="Checked" checked="checked" />

            <FormLabel component="legend">Checkboxes with FormGroup</FormLabel>
            <FormGroup>
                <IMFormControlLabel control={<IMCheckbox onChange={handleChange} />} label="Miracy" />
                <IMFormControlLabel control={<IMCheckbox onChange={handleChange} />} label="Lucy" />
                <IMFormControlLabel control={<IMCheckbox onChange={handleChange} />} label="Llorca" />
            </FormGroup>
        </Fragment>
    )
}
