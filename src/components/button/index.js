import React from 'react';
import PropTypes from 'prop-types';

function SharedButton({ buttonText, emitEvent }) {

  function handleSubmit() {
    if(emitEvent) {
      emitEvent();
    }
  }

  return (
    <button data-test="button-component" onClick={handleSubmit}>
      {buttonText}
    </button> 
  )
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton;
