import React from 'react'
import IMFormControlLabel from 'im-react/IMFormControlLabel';
import IMRadio from 'im-react/IMRadio';
import { Fragment } from 'react';

export default function Example() {
    return (
        <Fragment>
            <IMFormControlLabel value="disabled" disabled control={<IMRadio />} label="(Disabled option)"/>
        </Fragment>
    )
}
