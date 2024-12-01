import { AppContainer, StyledFootprintImage } from "../styles/AppStyles";
import ecologicalFootprintImg from '../assets/ecological-footprint.jpg';

const Home = () => (
  <AppContainer>
      <h1>Welcome to the Footprint Calculator</h1>
      <p>“Footprint” is a concept that represents human occupation of natural resources and the burdens and impacts of human activities on the environment</p>
      <StyledFootprintImage src={ecologicalFootprintImg} alt="Ecological Footprint" />
      
  </AppContainer>
  );
  
  export default Home;
  