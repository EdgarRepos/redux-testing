import React from "react";
import PropTypes from "prop-types";

function Headline({ header, description }) {

  if (!header) {
    return null;
  }

  return (
    <div data-test="headline-component">
      <h1 data-test="header">{header}</h1>
      <p data-test="description">{description}</p>
    </div>
  )
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempArray: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    age: PropTypes.number,
    online: PropTypes.bool
  }))
}

export default Headline;