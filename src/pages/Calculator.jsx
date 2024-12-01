import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { AppContainer, StyledInput, StyledButton, ButtonContainer, FormContainer } from "../styles/AppStyles";
import useEmissionsCalculator from '../hooks/useEmissionsCalculator';
import Select from 'react-select';

const Calculator = () => {
  const { result, calculate } = useEmissionsCalculator();
  const [diet, setDiet] = useState(null);
  const [transport, setTransport] = useState(null);
  const [distance, setDistance] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCalculate = () => {
    if (!diet || !transport || distance <= 0) {
      setErrorMessage('Please fill in all fields before calculating.');
      return;
    }
    setErrorMessage('');
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
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
        <fieldset>
          <div>
            <label>Type of Transport:</label>
            <Select
              value={transport}
              onChange={(selectedOption) => setTransport(selectedOption)}
              options={transportOptions}
            />
          </div>
          <div className='pt-4' >
            <label>Distance (km):</label>
            <StyledInput
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
          </div>
        </fieldset>
        <div className='pt-4'>
          <fieldset>
            <label>Type of Diet:</label>
            <Select
              value={diet}
              onChange={(selectedOption) => setDiet(selectedOption)}
              options={dietOptions}
            />
          </fieldset>
        </div>

        <ButtonContainer>
          <StyledButton onClick={handleCalculate}>Calculate</StyledButton>
        </ButtonContainer>
        </form>
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