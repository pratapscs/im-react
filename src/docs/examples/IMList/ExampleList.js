import React, { Fragment } from 'react';
import IMList from 'im-react/IMList';

export default function ExampleList() {
    return (
        <Fragment>
            <IMList icon1="chat" itemTitle="Primary Text" icon2="ExpandLessIcon" itemSubtitle="Secondary Text" />
        </Fragment>
    )
}
