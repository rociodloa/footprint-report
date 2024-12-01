import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #008000; /* Green color */
  padding: 20px;
  text-align: right;
  color: white;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 Environmental Impact Calculator.</p>
  </FooterContainer>
);

export default Footer;