import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundHeaderImg from '../assets/sustainable-development.jpg';

export const HeaderContainer = styled.header`
  background-image: url(${backgroundHeaderImg});
  background-position-y: -27px;
  color: white;
  width: 100%;

  @media (min-width: 1200px) {
    min-height: 150px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  color: #008000;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: white;
  }
`;

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFootprintImage = styled.img`
  width: 75%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;