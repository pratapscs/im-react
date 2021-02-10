import React, { useState ,Fragment } from "react";
import PropTypes from 'prop-types'
import { Step, Stepper } from '@material-ui/core';
import './IMStepper.css';

function IMStepper({titleColor, fontSize, bgColor, padding, ...props}) {
    const currentTime = useState(new Date().toLocaleString());

    return (
        <Fragment>
            <Stepper style={{ backgroundColor: bgColor, padding: padding,color:titleColor }}>
                <Step></Step>
                <Step>
                    <p style={{size:fontSize}} className="stepper-text">{currentTime}</p>
                </Step>
                <Step></Step>
            </Stepper>
        </Fragment>
    );
}

IMStepper.propTypes = {
    titleColor: PropTypes.string,
    fontSize: PropTypes.string,
    bgColor:  PropTypes.string,
    padding:  PropTypes.string
};

IMStepper.defaultProps = {
    titleColor: "red",
    fontSize: "sm",
    bgColor: "transparent",
    padding: "30px"
};

export default IMStepper;

