// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto"; // ADD THIS
import { Pie } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const PieSurvive = ({ surviveArray }) => {
    // ChartJS.register(ArcElement, Tooltip, Legend);

    let survived = { yes: 0, no: 0 };

    // eslint-disable-next-line react/prop-types
    surviveArray?.map((passenger) => {
        if (passenger.Survived == 1) {
            survived.yes += 1;
        }
        if (passenger.Survived == 0) {
            survived.no += 1;
        }
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const data = {
        labels: ["Survivants", "Décès"],
        datasets: [
            {
                label: "Nombre de Passagers",
                data: [survived.yes, survived.no],
                backgroundColor: ["#FCFCD4", "#00C59C"],
            },
        ],
    };

    return <Pie data={data} options={options} />;
};

export default PieSurvive;
