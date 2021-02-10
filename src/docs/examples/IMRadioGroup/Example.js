import React from 'react';
import IMRadioGroup from 'im-react/IMRadioGroup';
import IMRadio from 'im-react/IMRadio';
import IMFormControlLabel from 'im-react/IMFormControlLabel';
import { Fragment } from 'react';
import FormLabel from '@material-ui/core/FormLabel';

function Example() {
    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    
    return (
        <Fragment>
            <FormLabel component="legend">Gender</FormLabel>
            <IMRadioGroup  name="gender1" value={value}  onChange={handleChange}>
            <IMFormControlLabel value="female" control={<IMRadio />} label="Female" />
            <IMFormControlLabel value="male" control={<IMRadio />} label="Male" /><br/>
            <IMFormControlLabel  control={<IMRadio color="primary" />} label="Label placement" labelPlacement="top" />
            </IMRadioGroup>
        </Fragment>
    );
}

export default Example;