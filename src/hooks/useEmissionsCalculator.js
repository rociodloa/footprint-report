import { useState } from 'react';

const useEmissionsCalculator = () => {
  const [result, setResult] = useState(null);

  const calculate = ({ transport, distance, diet }) => {
    const emissionFactors = {
      transport: { car: 0.21, bus: 0.05, bike: 0 },
      diet: { omnivore: 2.5, vegetarian: 1.7, vegan: 1.0 },
    };
    const transportEmissions = distance * (emissionFactors.transport[transport] || 0);
    const dietEmissions = emissionFactors.diet[diet] || 0;
    setResult({ transportEmissions, dietEmissions });
  };

  return { result, calculate };
};

export default useEmissionsCalculator;
