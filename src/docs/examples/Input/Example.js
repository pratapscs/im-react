import React from 'react';
import Input from 'im-react/Input';

/** Input example */

function Example() {
    const showMessage = e => {
        /* eslint-disable no-console */
        console.log(e.target.value);
    };

    return (
        <div>
            <Input
                htmlId="default-Input1"
                name="default-Input1"
                label="Input Field"
                onChange={e => showMessage(e)}
                placeholder="Some placeholder text" 
            />
             <br />
            <br />

            <Input
                htmlId="name-Input"
                name="name-Input"
                onChange={e => showMessage(e)}
                placeholder="Corporate Name"
                width={'60%'}
            />
            
            <br />
            <br />
            
            <Input
                htmlId="default-Input2"
                name="default-Input2"
                onChange={e => showMessage(e)}
                placeholder="Search"
            />
            <br />
            <br />

            <Input
                htmlId="email-Input"
                name="email-Input"
                type="email"
                onChange={e => showMessage(e)}
                placeholder="Email"
                width={'60%'}
            />
            <br />
            <br />

            <Input
                htmlId="number-Input"
                name="number-Input"
                type="number"
                onChange={e => showMessage(e)}
                placeholder="Phone number"
                width={'50%'}
            />
            <br />
            <br />

            <Input
                htmlId="text-Input"
                name="text-Input"
                type="text"
                label="Error test"
                onChange={e => showMessage(e)}
                placeholder="Error message"
                value="Something wrong"
                width={'40%'}
                error="Something wrong!"
            />
            <br />
            <br />

        </div>
    );
}

export default Example;
