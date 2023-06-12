/* eslint-disable react/prop-types */
const CardPassenger = ({ passengers }) => {
    const style = {
        height: "46vh",
        display: "block",
        width: "auto",
        padding: "1em",
        backgroundColor: "#B0DEE3",
        margin: "0.5em 1em",
        overflow: "auto",
        opacity: "0.8",
    };

    const checkEmbarked = (embarked) => {
        switch (embarked) {
            case "S":
                return "Southampton";

            case "Q":
                return "Queenstown";
            case "C":
                return "Cherbourg";
        }
    };

    passengers?.sort((a, b) => a.PassengerId - b.PassengerId);

    return (
        <div style={style} className="rounded-4 shadow-sm">
            <table className="table" style={{ color: "#242424" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Classe</th>
                        <th scope="col">Sexe</th>
                        <th scope="col">Ticket</th>
                        <th scope="col">Embarquement</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers?.map((passenger) => (
                        <tr key={passenger.PassengerId}>
                            <th scope="row">{passenger.PassengerId}</th>
                            <td>{passenger.Survived == 0 ? "Décédé" : "Survivant"}</td>
                            <td>{passenger.Name}</td>
                            <td>{passenger.Pclass}</td>
                            <td>{passenger.Sex == "female" ? "Femme" : "Homme"}</td>
                            <td>{passenger.Ticket}</td>
                            <td>{checkEmbarked(passenger.Embarked)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CardPassenger;
