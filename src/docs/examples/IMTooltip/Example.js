import React, { Fragment } from 'react';
import IMTooltip from 'im-react/IMTooltip';
import { Button } from '@material-ui/core';

export default function IMIconExample() {
  return (
      <Fragment>
        <IMTooltip>
          <Button>Invite</Button>
        </IMTooltip>
      </Fragment>
  );
}
