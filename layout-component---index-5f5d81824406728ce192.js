webpackJsonp([3],{"./src/components/Header.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var l=r(["\n  font-size: 2.5rem;\n  line-height: 1;\n  font-weight: bold;\n  display: block;\n  margin: 1rem auto;\n  text-align: center;\n  text-transform: uppercase;\n  border: 5px solid black;\n  padding: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n\n  @media (min-width: 800px) {\n    display: inline-block;\n    margin: 1rem 0;\n  }\n"],["\n  font-size: 2.5rem;\n  line-height: 1;\n  font-weight: bold;\n  display: block;\n  margin: 1rem auto;\n  text-align: center;\n  text-transform: uppercase;\n  border: 5px solid black;\n  padding: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n\n  @media (min-width: 800px) {\n    display: inline-block;\n    margin: 1rem 0;\n  }\n"]),i=r(["\n  padding: 20px;\n  background-color: white;\n  border: 1px solid rgba(black, 0.3);\n  overflow: hidden;\n  "],["\n  padding: 20px;\n  background-color: white;\n  border: 1px solid rgba(black, 0.3);\n  overflow: hidden;\n  "]),a=r(["\n  padding: 0;\n  list-style: none;\n  display: block;\n  margin: 1rem 4rem;\n  text-align: center;\n\n  @media (min-width: 800px) {\n    display: inline-block;\n    text-align: left;\n  }\n"],["\n  padding: 0;\n  list-style: none;\n  display: block;\n  margin: 1rem 4rem;\n  text-align: center;\n\n  @media (min-width: 800px) {\n    display: inline-block;\n    text-align: left;\n  }\n"]),s=r(["\n  margin: 0 10px;\n  font-size: 1.6rem;\n  line-height: 2rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: all 0.5s;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n    opacity: 1;\n  }\n"],["\n  margin: 0 10px;\n  font-size: 1.6rem;\n  line-height: 2rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: all 0.5s;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n    opacity: 1;\n  }\n"]),d=t("./node_modules/react/react.js"),b=o(d),c=t("./node_modules/gatsby-link/index.js"),u=o(c),p=t("./node_modules/styled-components/lib/index.js"),g=o(p),m=t("./src/styled/container.js"),f=o(m),x=function(){return b.default.createElement(y,null,b.default.createElement(f.default,null,b.default.createElement(h,{to:"/"},"Gatsby Blog"),b.default.createElement(j,null,b.default.createElement(v,{to:"/"}," Home "),b.default.createElement(v,{to:"/about"}," About "))))},h=(0,g.default)(u.default)(l),y=g.default.header(i),j=g.default.nav(a),v=(0,g.default)(u.default)(s);n.default=x,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-react/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-es2015/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-stage-1/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/rvgpl/learn/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rvgpl/learn/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,n,t){"use strict";function o(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var l=t("./node_modules/react/react.js"),i=r(l),a=t("./node_modules/prop-types/index.js"),s=o(a),d=t("./src/components/Header.js"),b=r(d),c=t("./src/styled/reset.js"),u=r(c),p=function(e){var n=e.children;return i.default.createElement("div",null,i.default.createElement(b.default,null),n())};(0,u.default)(),p.propTypes={children:s.func.isRequired},n.default=p,e.exports=n.default},"./src/styled/reset.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=o(['\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n  a,\n  button {\n    text-decoration: none;\n    color: inherit;\n    font: inherit;\n    letter-spacing: inherit;\n    border: 0;\n    background: none;\n    cursor: pointer;\n  }\n'],['\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n  a,\n  button {\n    text-decoration: none;\n    color: inherit;\n    font: inherit;\n    letter-spacing: inherit;\n    border: 0;\n    background: none;\n    cursor: pointer;\n  }\n']),l=t("./node_modules/styled-components/lib/index.js"),i=function(){return(0,l.injectGlobal)(r)};n.default=i,e.exports=n.default}});
//# sourceMappingURL=layout-component---index-5f5d81824406728ce192.js.map