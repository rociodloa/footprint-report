import React from 'react';

const Card = ({ result }) => {
  const totalEmissions = result ? result.dietEmissions + result.transportEmissions : 0;

  return (
    <div>
      <h2>Emissions Result</h2>
      {result ? (
        <div>
          <p>Diet Emissions: {result.dietEmissions} kg CO2</p>
          <p>Transport Emissions: {result.transportEmissions} kg CO2</p>
          <p>Total Emissions: {totalEmissions} kg CO2</p>
        </div>
      ) : (
        <p>No result calculated yet.</p>
      )}
    </div>
  );
};

export default Card;