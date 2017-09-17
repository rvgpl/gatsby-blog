import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import breakpoint from "../styled/breakpoint";

const SocialLinks = () =>
  <SocialNav>
    <Wrapper>
      <SocialLink>
        <LinkWrapper to="https://www.twitter.com/rvgpl">Twitter</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper to="http://www.instagram.com/rvgpl">Instagram</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper to="https://www.github.com/rvgpl">Github</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper to="http://www.flickr.com/rvgpl">Flickr</LinkWrapper>
      </SocialLink>
    </Wrapper>
  </SocialNav>;

// Styles
const SocialNav = styled.nav`margin: 4rem auto;`;

const Wrapper = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoint.tablet`
      justify-content: start;
    `};
`;

const SocialLink = styled.li`
  ${breakpoint.tablet`
      margin-right: 0.8rem;
    `};
`;

const LinkWrapper = styled(Link)`
     cursor: pointer;
     font-size: 1.6rem;
     font-family: ${props => props.theme.primaryTypeface};
     color:  ${props => props.theme.socialNavColor};
     background-color: ${props => props.theme.socialNavBG};
     transition: color .15s ease-in;
     transition: background-color .15s ease-in-out;

     &:hover,
     &:focus {
       background-color:  ${props => props.theme.socialNavHoverColor}
     }
  `;

export default SocialLinks;
