import React from 'react';
import Tooltip from 'im-react/Tooltip';

/**
 * Example of a Tooltip component with content
 * */

function Example() {
    return (
        <div>
            <Tooltip label="Hover Tooltip">
                Hover tooltip example 
            </Tooltip>

            <br />
            <br />

            <Tooltip label="Click Tooltip" click>
                click tooltip example

                <a className="chat-link" style={{ display: 'block', color: '#fff', textDecoration: 'underline', textTransform: 'uppercase', marginTop: '20px' }}>
                    Click
                </a>
            </Tooltip>
        </div>
    );
}

export default Example;
