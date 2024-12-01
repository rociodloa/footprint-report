import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';

const nodes = [
  { id: '1', data: { label: 'Transportation' }, position: { x: 100, y: 50 } },
  { id: '2', data: { label: 'Carbon Emissions' }, position: { x: 200, y: 200 } }  
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true }
];

const ReactFlowChart = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  </div>
);

export default ReactFlowChart;
