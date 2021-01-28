import React from 'react';
import LeftSideBar from 'im-react/LeftSideBar';
import InvitationCard from 'im-react/InvitationCard';
import MenuList from 'im-react/MenuList';

export default function LeftSideBarExample() {
  const leftSideBarMenuListClicked = () => {
    alert("Clicked!")
  };
  return (
    <LeftSideBar>
      <InvitationCard title="Invite Team Members" subTitle="Get your members on board to start collaborating" />
      <MenuList onClick={leftSideBarMenuListClicked}/>
      
    </LeftSideBar>
  );
}
