import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import injectResetCSS from '../styled/reset';

const Template = (props) => {
  const { location, children } = props;
  let header;

  if (location.pathname === '/') {
    header = (
      <h1>
        <Link to={'/'} >
          Home
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={'/'} >
          Home
        </Link>
      </h3>
    );
  }

  return (
    <div>
      { header }
      { children() }
    </div>
  );
};

injectResetCSS();
Template.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.String,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

export default Template;
