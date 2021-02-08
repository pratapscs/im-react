import React from "react";
import PropTypes from "prop-types";
import IMIcon from "../IMIcon";
import IconButton from "@material-ui/core/IconButton";

function IMChatHeaderAction({ color, display, justifyContent, alignItems, margin, onClick }) {
  return (
    <div style={{ display: display, justifyContent: justifyContent, alignItems: alignItems, margin: margin }}>
      <IconButton aria-label="audio" onClick={onClick}>
        <IMIcon icon="audio" size="30" color={color}></IMIcon>
      </IconButton>
      <IconButton aria-label="video" onClick={onClick}>
        <IMIcon icon="video" size="30" color={color}></IMIcon>
      </IconButton>
      <IconButton aria-label="Person Add" onClick={onClick}>
        <IMIcon icon="PersonAdd" size="30" color={color}></IMIcon>
      </IconButton>
    </div>
  );
}

IMChatHeaderAction.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

IMChatHeaderAction.defaultProps = {
  color: '#304669',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '5px 10px 0 0',
};

export default IMChatHeaderAction;

