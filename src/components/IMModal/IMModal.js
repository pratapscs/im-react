import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IMButton from "../IMButton";
import IMIconButton from "../IMIconButton";
import IMIcon from "../IMIcon";
import { Box, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Box style={{ float: "left" }}>
        <Typography variant="h6">{children}</Typography>
      </Box>

      {onClose ? (
        <Box style={{ float: "right" }}>
          <IMIconButton
            icon="CancelIcon"
            ariaLabel="Close"
            size="10"
            color="#ff1744"
            margin="-5px -10px 0 0"
            onClick={onClose}
          />
        </Box>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function IMModal({
  id,
  isOpen,
  handleClose,
  title,
  subTitle,
  children,
  fullWidth,
  maxWidth,
  headerBorder,
  footerBorder,
  bodyBg,
  bodyColor,
  headerBg,
  headerColor,
  footerBg,
  footerColor,
  actionBtn,
  actionBtnType,
  actionBtnIcon,
  actionBtnIconSize,
  actionBtnIconColor,
  actionBtnBg,
  actionBtnColor,
  actionBtnOnClick,
  onClick,
  ...props
}) {
  return (
    <div>
      <Dialog
        id={id}
        onClose={handleClose}
        open={isOpen}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle
          onClose={handleClose}
          style={{ background: headerBg, color: headerColor }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          style={{
            background: bodyBg,
            color: bodyColor,
            borderTop: headerBorder,
            borderBottom: footerBorder,
          }}
        >
          <MuiDialogContentText style={{ color: bodyColor }}>
            {subTitle}
          </MuiDialogContentText>
          {children}
        </DialogContent>
        <DialogActions style={{ background: footerBg, color: footerColor }}>
          {actionBtn ? (
            <IMButton
              bgColor={actionBtnBg}
              type={actionBtnType}
              color={actionBtnColor}
              onClick={actionBtnOnClick}
            >
              {actionBtn}&nbsp;
              {actionBtnIcon ? (
                <IMIcon
                  icon={actionBtnIcon}
                  size={actionBtnIconSize}
                  color={actionBtnIconColor}
                  style={{ padding: "0" }}
                />
              ) : (
                ""
              )}
            </IMButton>
          ) : (
            ""
          )}
          <IMButton bgColor="#EFEFEF" color="#ff1744" onClick={handleClose}>
            Cancel
          </IMButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
IMModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.element,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs", "false"]),
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  onClick: PropTypes.func,  
  footerBg: PropTypes.string,
  footerColor: PropTypes.string,
  headerBg: PropTypes.string,
  headerColor: PropTypes.string,
  bodyBg: PropTypes.string,
  bodyColor: PropTypes.string,
  headerBorder: PropTypes.string,
  footerBorder: PropTypes.string,
  actionBtn: PropTypes.string,
  actionBtnOnClick: PropTypes.func,  
  actionBtnBg: PropTypes.string,
  actionBtnColor: PropTypes.string,
  actionBtnType: PropTypes.oneOf(["button", "submit", "reset"]),
  actionBtnIcon: PropTypes.string,
  actionBtnIconSize: PropTypes.number,
  actionBtnIconColor: PropTypes.string,
};
IMModal.defaultProps = {
  maxWidth: "sm",
  fullWidth: "true",
  actionBtnIconSize: 25,
  actionBtnType: "button",
  actionBtnIconColor: "#FFF",
  headerBorder: "1px solid rgba(0, 0, 0, 0.12)",
  footerBorder: "1px solid rgba(0, 0, 0, 0.12)",
};
export default IMModal;