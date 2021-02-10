import React, {useState} from "react";
import IMButton from "im-react/IMButton";
import IMModal from "im-react/IMModal";

/** IM Modal example */

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  const clickedAction = () => {
    alert("Action Clicked !");
  }
  return (
    <div>
      <IMButton onClick={handleDialogOpen}>My Modal</IMButton>
      <IMModal
        id="myModal"
        isOpen={isOpen}
        handleClose={handleDialogClose}        
        title="This is Modal Header"
        subTitle="Sub Title Here"
        actionBtn="Save"
        actionBtnOnClick={clickedAction}
      >
        <h4>This is a Modal Body</h4>
      </IMModal>
    </div>
  );
}

export default Example;