import React from 'react';
import PropTypes from 'prop-types';
import IMIconButton from "../IMIconButton/IMIconButton";



function IMCardHeaderAction({bgColor, color, size, margin, padding, icon, ariaLabel, id, onClick, ...props}) {
    return (
        <div style={{margin:margin, padding:padding,}}>
          <IMIconButton id={id} icon={icon} color={color} bgColor={bgColor} size={size} ariaLabel={ariaLabel}  onClick={onClick} />         
        </div>
    )
}
IMCardHeaderAction.propTypes = {
    id: PropTypes.any, 
    bgColor: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,    
    padding: PropTypes.string,
    margin: PropTypes.string,
    icon: PropTypes.string,   
    ariaLabel:PropTypes.string,
    onClick: PropTypes.func,
}; 
IMCardHeaderAction.defaultProps = {
  
};
export default IMCardHeaderAction;

