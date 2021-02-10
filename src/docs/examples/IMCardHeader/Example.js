import React from "react";
import IMCard from "im-react/IMCard";
import IMCardHeader from "im-react/IMCardHeader";

/** IM Card Header example */

function Example() {
  const clickedAction = () => {
    alert("Action Clicked !");
  };
  return (
    <div>
      <IMCard>
        <IMCardHeader
          title="Card Header Title"
          subTitle="Card Sub Title"
          headerAvatar="A"
          headerAvatarSize="50"
          actionIcon="MoreHoriz"
          onClickAction={clickedAction}
        ></IMCardHeader>
      </IMCard>
      {/* without Action and Sub Title Icon */}
      <h5>Profile Card Header Example</h5>
      <IMCard>
        <IMCardHeader
          bgColor="#07a542"
          titleColor="white"
          titleFontSize="22px"  
          subTitleColor="lightgrey"  
          subTitleFontSize="16px"      
          title="User Name"
          subTitle="Organization Name"
          subTitleIcon="OrgIcon"
          subTitleIconSize="20"
          headerAvatarSrc="https://www.w3schools.com/bootstrap4/img_avatar3.png"
          headerAvatarSize="80"
          headerAvatarBorder="2px solid #EFEFEF"

        ></IMCardHeader>
      </IMCard>


    </div>
  );
}

export default Example;