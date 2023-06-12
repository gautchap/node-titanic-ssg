// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto"; // ADD THIS
import { Doughnut } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const Camembert = ({ sexArray }) => {
    // ChartJS.register(ArcElement, Tooltip, Legend);

    let sex = { female: 0, male: 0 };

    // eslint-disable-next-line react/prop-types
    sexArray?.map((passenger) => {
        if (passenger.Sex == "female") {
            sex.female += 1;
        }
        if (passenger.Sex == "male") {
            sex.male += 1;
        }
    });

    const data = {
        labels: ["Femmes", "Hommes"],

        datasets: [
            {
                label: "Nombre",
                data: [sex.female, sex.male],
                backgroundColor: ["#E6A8C8", "#00AAC1"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Doughnut data={data} options={options} />;
};

export default Camembert;
