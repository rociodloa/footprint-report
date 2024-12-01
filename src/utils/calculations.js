const emissionFactors = {
    transport: { car: 0.21, bus: 0.05, bike: 0 },
    diet: { omnivore: 2.5, vegetarian: 1.7, vegan: 1.0 },
  };
  
  export const calculateCarbonFootprint = ({ transport, distance, diet }) => {
    const transportEmissions = distance * emissionFactors.transport[transport];
    const dietEmissions = emissionFactors.diet[diet];
    return transportEmissions + dietEmissions;
  };
  