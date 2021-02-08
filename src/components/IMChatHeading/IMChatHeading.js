import React from "react";
import PropTypes from "prop-types";
import IMAvatar from "../IMAvatar";
import IMHeading from "../IMHeading";

function IMChatHeading({
  avatar,
  avatarVariant,
  avatarBg,
  avatarColor,
  avatarSize,
  avatarSrc,
  avatarBorder,
  avatarMargin,
  headingText,
  headingColor,
  headingFontSize,
  headingFontWeight,
  headingFontFamily,
  headingTextAlign,
  headingMargin,
  headingPadding,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IMAvatar
        variant={avatarVariant}
        bgColor={avatarBg}
        color={avatarColor}
        size={avatarSize}
        src={avatarSrc}
        border={avatarBorder}
        margin={avatarMargin}
      >
        {avatar}
      </IMAvatar>
      <IMHeading
        text={headingText}
        color={headingColor}
        fontSize={headingFontSize}
        fontWeight={headingFontWeight}
        fontFamily={headingFontFamily}
        textAlign={headingTextAlign}
        margin={headingMargin}
        padding={headingPadding}
      />
    </div>
  );
}

IMChatHeading.prototypes = {
  avatar: PropTypes.string,
  avatarVariant: PropTypes.oneOf(["circle", "circular", "rounded", "square"]),
  avatarBg: PropTypes.string,
  avatarColor: PropTypes.string,
  avatarSize: PropTypes.number,
  avatarSrc: PropTypes.string,
  avatarBorder: PropTypes.string,
  avatarMargin: PropTypes.string,
  headingText: PropTypes.string,
  headingColor: PropTypes.string,
  headingFontSize: PropTypes.string,
  headingFontWeight: PropTypes.string,
  headingFontFamily: PropTypes.string,
  headingTextAlign: PropTypes.string,
  headingMargin: PropTypes.string,
  headingPadding: PropTypes.string,
  onClick: PropTypes.func,
};

IMChatHeading.defaultProps = {
  avatarVariant: "circular",
  avatarSize: 50,
  headingColor: "#304669",
  headingMargin: '0',
  avatarBg: "#1dc85d",
  avatarColor: "#FFFFFF",
  avatarMargin: "10px"
};


export default IMChatHeading;
