import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../styled/container";
import Logo from "./Logo";

const Header = () =>
  <HeaderWrapper>
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Nav>
        <NavItem to={"/"}> Articles </NavItem>
        <NavItem to={"/"}> Photos </NavItem>
        <NavItem to={"/about"}> About </NavItem>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>;

// Styles
const HeaderWrapper = styled.header`margin: 4rem auto;`;

const Nav = styled.nav`
  padding: 1rem;
  list-style: none;
  text-align: center;

  @media (min-width: 800px) {
    padding: 0;
    margin: 0;
    text-align: left;
  }
`;

const NavItem = styled(Link)`
  font-family: Lora, Georgia, serif;
  padding: 1rem;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  color: black;
  letter-spacing: 1px;

  &:hover {
    color: white;
    background-color: red;
  }
  @media (min-width: 800px) {
    margin: 0 10px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }

`;
export default Header;
