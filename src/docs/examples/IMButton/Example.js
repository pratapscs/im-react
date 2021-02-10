import React from 'react';
import IMButton from 'im-react/IMButton';
import IMIcon from 'im-react/IMIcon';

/** IM Button example */

function Example() {
  const clickme = () => {
    alert("Clicked !");
  }

  return (
    <div>
      <IMButton size="large" bgColor="purple" color="white" id="myID" onClick={clickme}>Large Button</IMButton>
      <IMButton bgColor="green" color="white" onClick={clickme} >Medium Button</IMButton>
      <IMButton bgColor="#CCC" color="black" onClick={clickme}> Button</IMButton>
      <IMButton size="small" bgColor="red" color="white" onClick={clickme}>Small Button</IMButton>
      <br></br><br></br>
      <IMButton fullWidth={true} onClick={clickme}>Button Block - Full Width</IMButton>
      <br></br><br></br>
      <IMButton disabled={true} onClick={clickme}>Disabled Button</IMButton>
      <br></br><br></br>
      <p>Button With Icon</p>
      <IMButton bgColor="red" color="white" onClick={clickme}><IMIcon icon="DeleteIcon" size="25" color="white" />Icon Button</IMButton>
    </div>
  );
}
export default Example;