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

export const FormContainer = styled.div`
  border: 1px solid #DEE2E6;
  border-radius: 16px;
  background-color: #F4FBF9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
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

export const StyledButton = styled.button`
  background-color: #008000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;

  &:hover {
    background-color: #006400;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const StyledInput = styled.input`
    display: block;
    width: 100% !important;
    padding: .5rem 1rem;
    max-height: 69px;
    border-radius: 4px;
    border: 2px solid #ced4da;
    appearance: none;
    background-color: #fff;
    color: var(--bs-body-color);
    font-weight: 400;
    line-height: 1.5;
    font-size: .73rem;
    outline: none;
    margin: 10px 0px;
`;

export const FieldError = styled.p`
  color: red;
  font-size: 12px;
`;