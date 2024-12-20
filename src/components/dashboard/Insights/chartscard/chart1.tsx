import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const Chart1 = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Incoming",
        data: [30, 35, 40, 50, 45, 48, 55],
        borderColor: "#7D8291",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        borderDash: [5, 5],
      },
      {
        label: "Answered",
        data: [20, 25, 30, 40, 35, 38, 43],
        borderColor: "#00A98F",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
      {
        label: "Experts Online",
        data: [10, 12, 14, 20, 16, 18, 19],
        type: "bar",
        backgroundColor: "#FFEBB5",
      },
    ],
  };

  const barData = {
    labels: ["This week", "Last week"],
    datasets: [
      {
        label: "Consultations",
        data: [20, 15],
        backgroundColor: "#C6F6D5",
      },
      {
        label: "Orders closed",
        data: [18, 14],
        backgroundColor: "#276749",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex justify-between gap-6">
      
      <div className="border-gray-100 border-2 shadow-md h-[500px] bg-white rounded-[20px] p-6 pb-14">
        <h3 className="flex gap-2 items-center text-xs text-gray-500 uppercase tracking-wider mb-4">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 5.8125C10.8736 7.05528 10.3793 8.24677 9.50056 9.12556C8.62177 10.0043 7.43028 10.4986 6.1875 10.5H2.23453C2.0398 10.4998 1.85311 10.4223 1.71541 10.2846C1.57772 10.1469 1.50025 9.9602 1.5 9.76547V5.8125C1.5 4.5693 1.99386 3.37701 2.87294 2.49794C3.75201 1.61886 4.9443 1.125 6.1875 1.125C7.4307 1.125 8.62299 1.61886 9.50206 2.49794C10.3811 3.37701 10.875 4.5693 10.875 5.8125Z"
              fill="#667085"
            />
          </svg>
          Consultations
        </h3>
        <Line data={lineData} options={lineOptions} className="w-[800px]" />
      </div>

      <div className="border-gray-100 border-2 shadow-md h-[500px] bg-white rounded-[20px] p-6 pb-14">
        <h3 className="flex gap-2 items-center text-xs text-gray-500 uppercase tracking-wider mb-4">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.875 8.75C9.875 8.84946 9.83549 8.94484 9.76517 9.01517C9.69484 9.08549 9.59946 9.125 9.5 9.125H0.5C0.400544 9.125 0.305161 9.08549 0.234835 9.01517C0.164509 8.94484 0.125 8.84946 0.125 8.75C0.125 8.65054 0.164509 8.55516 0.234835 8.48483C0.305161 8.41451 0.400544 8.375 0.5 8.375H0.875V5.375C0.875 5.27554 0.914509 5.18016 0.984835 5.10983C1.05516 5.03951 1.15054 5 1.25 5H2.375C2.47446 5 2.56984 5.03951 2.64016 5.10983C2.71049 5.18016 2.75 5.27554 2.75 5.375V8.375H3.5V3.125C3.5 3.02554 3.53951 2.93016 3.60984 2.85984C3.68016 2.78951 3.77554 2.75 3.875 2.75H5.375C5.47446 2.75 5.56984 2.78951 5.64017 2.85984C5.71049 2.93016 5.75 3.02554 5.75 3.125V8.375H6.5V0.875C6.5 0.775544 6.53951 0.680161 6.60983 0.609835C6.68016 0.539509 6.77554 0.5 6.875 0.5H8.75C8.84946 0.5 8.94484 0.539509 9.01517 0.609835C9.08549 0.680161 9.125 0.775544 9.125 0.875V8.375H9.5C9.59946 8.375 9.69484 8.41451 9.76517 8.48483C9.83549 8.55516 9.875 8.65054 9.875 8.75Z"
              fill="#667085"
            />
          </svg>
          Vs Past Period
        </h3>
        <Bar data={barData} options={barOptions} className="w-[344px]" />
      </div>
    </div>
  );
};

export default Chart1;
