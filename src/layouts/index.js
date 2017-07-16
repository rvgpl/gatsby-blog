import React from 'react';
import * as PropTypes from 'prop-types';
import Header from '../components/Header';
import injectResetCSS from '../styled/reset';

const Template = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      { children() }
    </div>
  );
};

injectResetCSS();

Template.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Template;
