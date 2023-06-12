// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "chart.js/auto"; // ADD THIS

import { Bar } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const BarClass = ({ classArray }) => {
    // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    // ChartJS.defaults.color = "black";
    let pclass = { first: 0, second: 0, third: 0 };

    // eslint-disable-next-line react/prop-types
    classArray?.map((passenger) => {
        if (passenger.Pclass == 1) {
            pclass.first += 1;
        }
        if (passenger.Pclass == 2) {
            pclass.second += 1;
        }
        if (passenger.Pclass == 3) {
            pclass.third += 1;
        }
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const data = {
        labels: ["Première Classe", "Deuxième Classe", "Troisième Classe"],
        datasets: [
            {
                label: "Classes du Titanic",
                data: [pclass.first, pclass.second, pclass.third],
                backgroundColor: ["#96C8FF", "#FFB46B", "#B3C6F5"],
            },
        ],
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
};

export default BarClass;
