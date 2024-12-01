import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyles = createGlobalStyle`

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Arial', sans-serif;
    text-align: left;
    color: #333;
    justify-content: center;
  }

  h1, h2, h3 {
    color: #282c34;
  }

  button {
    padding: 10px 20px;
    background-color: #61dafb;
    color: ${COLORS.TEXT};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #21a1f1;
    }
  }
`;

export default GlobalStyles;
