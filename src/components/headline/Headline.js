import React from "react";

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

export default Headline;