import React from "react";
import PropTypes from "prop-types";
import IMIcon from "../IMIcon";
import IconButton from "@material-ui/core/IconButton";

function IMChatHeaderAction({ color, onClick }) {
  return (
    <div>
      <IconButton aria-label="audio" onClick={onClick}>
        <IMIcon icon="audio" color={color}></IMIcon>
      </IconButton>
      <IconButton aria-label="video" onClick={onClick}>
        <IMIcon icon="video" color={color}></IMIcon>
      </IconButton>
      <IconButton aria-label="Person Add" onClick={onClick}>
        <IMIcon icon="PersonAdd" color={color}></IMIcon>
      </IconButton>
    </div>
  );
}
IMChatHeaderAction.propTypes = {
  color: PropTypes.string,
  onClick:PropTypes.func,
};
IMChatHeaderAction.defaultProps = {
  color: "#304669",
};

export default IMChatHeaderAction;

