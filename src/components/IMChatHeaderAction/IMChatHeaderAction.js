import React from "react";
import PropTypes from "prop-types";
import IMIconButton from "../IMIconButton/IMIconButton";

function IMChatHeaderAction({ color, bgColor, size, display, justifyContent, alignItems, margin, onClick }) {
  return (
    <div style={{display:display, justifyContent:justifyContent, alignItems:alignItems, margin:margin}}>
      <IMIconButton icon="audio" color={color} bgColor={bgColor} size={size} ariaLabel="Audio" />
      <IMIconButton icon="video" color={color} bgColor={bgColor} size={size} ariaLabel="Video" /> 
      <IMIconButton icon="PersonAdd" color={color} bgColor={bgColor} size={size} ariaLabel="Person Add" />     
    </div>
  );
}
IMChatHeaderAction.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.number,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.string,
  onClick:PropTypes.func,
};
IMChatHeaderAction.defaultProps = {
  color: '#304669',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin:'5px 10px 0 0',
};
export default IMChatHeaderAction;