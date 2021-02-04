import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
  return (
    <Fragment>
      <ul className="navigation">
        <h3>
          <a className="title" href="https://github.com/pratapscs/im-react">Documentation</a>
        </h3>
        {
          components.map(name => {
            return (
              <li key={name}>
                <a href={`#${name}`}>{name}</a>
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
