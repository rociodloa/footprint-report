import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { AppContainer } from "../styles/AppStyles";
import useEmissionsCalculator from '../hooks/useEmissionsCalculator';
import Select from 'react-select';

const FormContainer = styled.div`
  border: 1px solid #DEE2E6;
  border-radius: 16px;
  background-color: #F4FBF9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
`;

const StyledButton = styled.button`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Calculator = () => {
  const { result, calculate } = useEmissionsCalculator();
  const [diet, setDiet] = useState(null);
  const [transport, setTransport] = useState(null);
  const [distance, setDistance] = useState(0);

  const handleCalculate = () => {
    if (!diet || !transport || distance <= 0) {
      alert('Please fill in all fields before calculating.');
      return;
    }
    calculate({ diet: diet?.value, transport: transport?.value, distance });
  };

  const dietOptions = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'omnivore', label: 'Omnivore' },
  ];

  const transportOptions = [
    { value: 'car', label: 'Car' },
    { value: 'bike', label: 'Bike' },
    { value: 'bus', label: 'Bus' },
  ];

  return (
    <AppContainer>
      <h1>Calculate personal footprint</h1>
      <FormContainer>
      <div>
          <label>
            <h3>Type of Transport:</h3>
            <Select
              value={transport}
              onChange={(selectedOption) => setTransport(selectedOption)}
              options={transportOptions}
            />
          </label>
        </div>
        <div>
          <label>
            <h3>Distance (km):</h3>
            <input
              className='hs-input'
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            <h3>Type of Diet:</h3>
            <Select
              value={diet}
              onChange={(selectedOption) => setDiet(selectedOption)}
              options={dietOptions}
            />
          </label>
        </div>
    
        
        <ButtonContainer>
          <StyledButton onClick={handleCalculate}>Calculate</StyledButton>
        </ButtonContainer>
      </FormContainer>
      {result !== null && (
        <>
          <Card result={result} />
          <Chart result={result} />
        </>
      )}
    </AppContainer>
  );
};

export default Calculator;