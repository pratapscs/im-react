import React, { Fragment } from 'react'
import IMRadio from 'im-react/IMRadio';


function Example() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Fragment>
            <IMRadio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            ></IMRadio>
            <IMRadio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
            />
         
        </Fragment>
    )
}
export default Example;
