import React from 'react';
import IMChatCard from 'im-react/IMChatCard';

/** IM Chat Card example */

function Example() {
  return (
    <div>
      <h5>IM Chat Card With Media</h5>
       <IMChatCard mediaPath="https://www.w3schools.com/bootstrap4/img_avatar3.png" title="Welcome to ZKTeco+" desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book." ></IMChatCard>
  
       <h5>IM Chat Card Without Media</h5>
       <IMChatCard title="Welcome to ZKTeco+" desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book." ></IMChatCard>
  

    </div>
  );
}

export default Example;