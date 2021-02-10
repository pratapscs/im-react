import React, { Fragment } from 'react'
import IMTextArea from 'im-react/IMTextArea';

function Example() {
    return (
        <Fragment>
            <IMTextArea  rowsMin={3} placeholder="Minimum 3 rows" ></IMTextArea><br/>
            <IMTextArea></IMTextArea><br/>
            <IMTextArea  rowsMin={8} placeholder="Maximum 4 rows"></IMTextArea><br/>
            <IMTextArea></IMTextArea><br/>
        </Fragment>
    )
}
export default Example;
