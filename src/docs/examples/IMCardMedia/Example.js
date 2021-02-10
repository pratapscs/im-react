import React from 'react';
import IMCard from 'im-react/IMCard';
import IMCardMedia from 'im-react/IMCardMedia';

/** IM Card Media example */

function Example() {
  return (
    <div>
      <IMCard>
        <IMCardMedia path="https://www.w3schools.com/bootstrap4/img_avatar3.png" title="Sample" ></IMCardMedia>
      </IMCard>
    </div>
  );
}

export default Example;