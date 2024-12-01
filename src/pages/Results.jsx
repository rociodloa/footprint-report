import React from 'react';
import ReactFlowChart from '../components/ReactFlowChart';
import 'reactflow/dist/style.css';

const Results = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center', padding: '20px' }}>
    <h1>Results</h1>
    <p>Here are your detailed emissions results.</p>
    <ReactFlowChart />
  </div>
);

export default Results;
