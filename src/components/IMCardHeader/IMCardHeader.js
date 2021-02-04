import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IMAvatar from "../IMAvatar";
import IMIcon from "../IMIcon";
import IMCardHeaderAction from "../IMCardHeaderAction";
import "./im-card-header.css";

function IMCardHeader({
  color,
  bgColor,
  title,
  subTitle,
  padding,
  subTitleIcon,
  subTitleIconSize,
  titleFontSize,
  subTitleFontSize,
  titleColor,
  subTitleColor,
  headerAvatar,
  headerAvatarBg,
  headerAvatarColor,
  headerAvatarSize,
  headerAvatarSrc,
  headerAvatarBorder,
  actionIcon,
  actionIconSize,
  actionIconBg,
  actionIconColor,
  onClickAction,
  ...props
}) {
  return (
    <Fragment>
      <div
        className="im-card-header"
        style={{ color: color, padding: padding, background: bgColor,  }} >
            <div style={{ display: headerAvatar || headerAvatarSrc ? "block" : "none" }}>
          <IMAvatar
            variant="circular"
            bgColor={headerAvatarBg}
            color={headerAvatarColor}
            size={headerAvatarSize}
            src={headerAvatarSrc}
            border={headerAvatarBorder}
          >
            {headerAvatar}
          </IMAvatar>
        </div>
        <div>
          <h4 className="im-card-header-title" style={{color:titleColor, fontSize:titleFontSize}}>{title}</h4>
          <span className="im-card-header-subtitle"  style={{color:subTitleColor, fontSize:subTitleFontSize,}}>
            <span style={{ display: subTitleIcon  ? "inline-block" : "none", marginLeft:'-5px' }}>
              <IMIcon size={subTitleIconSize} icon={subTitleIcon} color={subTitleColor} />
            </span>
            {subTitle}
          </span>
        </div>        
        <div style={{ display: actionIcon ? "block" : "none", marginRight:'10px' }}>
          <IMCardHeaderAction
            icon={actionIcon}
            onClick={onClickAction}
            size={actionIconSize}
            bgColor={actionIconBg}
            color={actionIconColor}
            iconSize={actionIconSize}
          />
        </div>
      </div>
    </Fragment>
  );
}
IMCardHeader.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  padding: PropTypes.string,
  subTitleIcon: PropTypes.string,
  subTitleIconSize: PropTypes.string,
  titleFontSize: PropTypes.string,
  subTitleFontSize: PropTypes.string,
  titleColor: PropTypes.string,
  subTitleColor: PropTypes.string,
  headerAvatar: PropTypes.string,
  headerAvatarBg: PropTypes.string,
  headerAvatarColor: PropTypes.string,
  headerAvatarSize: PropTypes.number,
  headerAvatarSrc: PropTypes.string,
  headerAvatarBorder: PropTypes.string,
  actionIcon: PropTypes.string,
  actionIconSize: PropTypes.string,
  actionIconBg: PropTypes.string,
  actionIconColor: PropTypes.string,
  onClickAction: PropTypes.func,  
};
IMCardHeader.defaultProps = {
  color: "#333",
};
export default IMCardHeader;
