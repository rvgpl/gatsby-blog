import React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import Header from "../components/Header";
import injectResetCSS from "../styled/reset";
import theme from "../styled/theme";


const Template = props => {
  const { children } = props;
  return (
      <ThemeProvider theme={theme}> 
        <div>
          <Header />
          {children()}
        </div>
      </ThemeProvider>
    
  );
};

injectResetCSS();

Template.propTypes = {
  children: PropTypes.func.isRequired
};

export default Template;
