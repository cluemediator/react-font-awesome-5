import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const FAIndividual = () => {
  return (
    <div className="individual">
      Follow
      <FontAwesomeIcon
        icon={faHeart}
        color="#fe251b"
        style={{ margin: '0 5px' }}
      />
      <span className='cm-style'>Clue Mediator</span>
      <FontAwesomeIcon
        icon={faThumbsUp}
        size='2x'
        color='#3b5998'
        transform={{ rotate: -20 }}
        style={{ marginLeft: 5 }}
      />
    </div>
  );
}

export default FAIndividual;