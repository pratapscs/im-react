import React from 'react';
import IMCardHeaderAction from 'im-react/IMCardHeaderAction/IMCardHeaderAction'

/** IM Card Header Action example */

function Example() {
  const clickedAction = () => {
    alert("Action Clicked !");
  }
  return (
    <div>

      <IMCardHeaderAction icon="MoreVert" onClick={clickedAction}  />
      <p>With Custom Background and Color</p>
      <IMCardHeaderAction icon="MoreVert" onClick={clickedAction} bgColor="green" color="white"  />
      

    </div>
  );
}

export default Example;