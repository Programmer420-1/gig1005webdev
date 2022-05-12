import React from "react";
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
      <img src="assets/images/logo.png" class="h-24" alt="digiteens Logo" />
    </NavLink>
  );
};

const NavLink = styled(Link)`
  cursor: pointer;
  padding: 5px 10px 5px 10px;
`;

export default Logo;
