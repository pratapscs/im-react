import React from 'react';
import Button from 'im-react/Button';

/** Button example */

function Example() {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <div>
            <Button
                htmlId="default-button"
                name="default-button"
                onClick={() => showMessage()}
            >
                Default
            </Button>
            <br />
            <br />

            <Button
                htmlId="default-button"
                name="default-button"
                onClick={() => showMessage()}
            >
                Invite
            </Button>
            <br />
            <br />

            <Button
                htmlId="regular-button"
                name="regular-button"
                onClick={() => showMessage()}
            >
                Add Employee
            </Button>
            <br />
            <br />

            <Button
                htmlId="block-button"
                name="block-button"
                onClick={() => showMessage()}
                classname="block"
            >
                Block Level Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="disabled-button"
                name="disabled-button"
                onClick={() => showMessage()}
                disabled="true"
            >
                Disabled Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="disabled-button"
                name="disabled-button"
                onClick={() => showMessage()}
                disabled="true"
                classname="block"
            >
                Disabled Block Level Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="waitlist-button"
                name="waitlist-button"
                onClick={() => showMessage()}
                classname="waitlist"
            >
               Application Center
            </Button>
            <br />
            <br />

            <Button
                htmlId="waitlist-button"
                name="waitlist-button"
                onClick={() => showMessage()}
                classname="waitlist block"
                size='sm'
            >
                Invite Members Join
            </Button>
            <br />
            <br />

        </div>
    );
}

export default Example;
