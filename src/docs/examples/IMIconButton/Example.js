import React from 'react';
import IMIconButton from 'im-react/IMIconButton';
/** IM Icon Button example */

function Example() {
  const clickme = () => {
    alert("Clicked !");
  }

  return (
     <div>
      <IMIconButton icon="video" id="video" onClick={clickme} />
      <IMIconButton icon="audio" id="audio" onClick={clickme} />   
    </div>
  );
}
export default Example;
