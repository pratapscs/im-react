import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import IMIcon from '../IMIcon/IMIcon';



function IMCardHeaderAction({bgColor, color, size, margin, padding, icon, iconSize, id, onClick, ...props}) {
    return (
        <div>
          <IconButton onClick={onClick} style={{background:bgColor, color:color, width:`${size}px`,  height:`${size}px`, padding:padding, margin:margin}}>
            <IMIcon color={color} icon={icon} size={iconSize} />
          </IconButton>
            
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
    iconSize:PropTypes.number,
    onClick: PropTypes.func,
}; 
IMCardHeaderAction.defaultProps = {
   iconSize:20,

};
export default IMCardHeaderAction;

