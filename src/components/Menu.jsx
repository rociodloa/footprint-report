import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const NavBar = styled.nav`
    padding: 8px 8px;
    margin-top: 30px;
    position: sticky;
    box-sizing: border-box;
`;

const Container = styled.nav`
    border: 1px solid #DEE2E6;
    border-radius: 16px;
    background-color: #F4FBF9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 36px;
    min-height: 60px;
  `;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #008000;
  text-transform: uppercase;
`;

const MenuLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    padding: 1rem;
    border-radius: 0.5rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #008000;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #61dafb;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Functional Component
const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <NavBar>
      <Container>
        <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </BurgerMenu>

        <MenuLinks isOpen={menuOpen}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/calculator">Calculator</StyledLink>
          <StyledLink to="/results">Results</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </MenuLinks>
        </Container>
      </NavBar>
  );
};

export default Menu;
