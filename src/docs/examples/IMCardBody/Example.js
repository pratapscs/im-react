import React from 'react';
import IMCard from 'im-react/IMCard';
import IMCardBody from 'im-react/IMCardBody';

/** IM Card Body example */

function Example() {

  return (
    <div>
      <IMCard>
        <IMCardBody>
          <h2>Card Body</h2>
          <p>This is a card body. Lorem ipsum, or lipsum as it is sometimes known,
          is dummy text used in laying out print, graphic or web designs.
          The passage is attributed to an unknown typesetter in the 15th century
          who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.</p>
        </IMCardBody>
      </IMCard>
    </div>
  );
}

export default Example;