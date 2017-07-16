import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from '../styled/container';


const Header = () =>
  (<HeaderWrapper>
    <Container>
      <Title>Gatsby Blog</Title>
      <Nav>
        <NavItem to={'/'}> Home </NavItem>
        <NavItem to={'/about'}> About </NavItem>
      </Nav>
    </Container>
  </HeaderWrapper>);

// Styles
const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1;
  font-weight: bold;
  display: inline-block;
  margin: 1rem 0;
  text-transform: uppercase;
`;

const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(black, 0.3);
  overflow: hidden;
  `;

const Nav = styled.nav`
  padding: 0;
  list-style: none;
  display: inline-block;
  margin: 1rem 4rem;
`;

const NavItem = styled(Link)`
  margin: 0 10px;
  font-size: 1.6rem;
  line-height: 2rem; 
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  opacity: 0.8;
  transition: all 0.5s;
  color: black;

  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;

export default Header;
