import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ title, description }) {

  if(!title) {
    return null;
  }

  return (
    <div data-test="list-item-component">
      <h2 data-test="component-title">{title}</h2>
      <div data-test="component-description">
        {description}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default ListItem;
