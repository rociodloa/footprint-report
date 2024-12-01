import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ result }) => {
    const data = {
        labels: ['Diet Emissions', 'Transport Emissions'],
        datasets: [
            {
                label: 'Carbon Emissions (kg CO2)',
                data: [result?.dietEmissions, result?.transportEmissions],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Carbon Emissions by Type',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default Chart;