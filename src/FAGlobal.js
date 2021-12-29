import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FAGlobal = () => {
  return (
    <div className="global">
      Happy
      <FontAwesomeIcon
        icon={["far", "smile"]}
        color="green"
        style={{ margin: '0 5px' }}
      />
      Coding..!!
      <FontAwesomeIcon
        icon="laptop-code"
        color="gray"
        style={{ marginLeft: 5 }}
      />
    </div>
  );
}

export default FAGlobal;