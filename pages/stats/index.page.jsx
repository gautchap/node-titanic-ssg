import SearchBar from "../../client/components/SearchBar";
import Camembert from "../../client/components/Camembert";
import Card from "../../client/components/Card";
import { useState, useEffect } from "react";
import BarClass from "../../client/components/BarClass";
import PieSurvive from "../../client/components/PieSurvive";
import CardPassenger from "../../client/components/CardPassenger";
import { searchPassenger } from "../../client/api/search";
import { logOutUser } from "../../client/api/signin";

export { Page };

export const documentProps = {
    title: "Titanic Data || Stats",
    description: "Our mission is to explore the galaxy.",
};

function Page() {
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [search, setSearch] = useState({ sex: "all", age: "all", pclass: "all" });

    useEffect(() => {
        searchPassenger(search?.sex, search?.age, search?.pclass)
            .then((res) => setData(res))
            .catch(() => {
                setErrorMsg(
                    <div className="alert alert-danger mx-2" role="alert">
                        Une erreur est survenue
                    </div>
                );
            });
    }, [search]);

    const signOut = () => {
        logOutUser();
        window.location.href = "/";
    };

    return (
        <>
            <div className="container-xl mt-3">
                {errorMsg}
                <div className="d-flex justify-content-end">
                    <button onClick={signOut} className="btn btn-primary mb-2 me-3 logout">
                        Se déconnecter
                    </button>
                </div>
                <SearchBar search={search} setSearch={setSearch} />

                <div className="d-flex justify-content-evenly flex-wrap">
                    <Card>
                        <Camembert sexArray={data} />
                    </Card>
                    <Card>
                        <BarClass classArray={data} />
                    </Card>
                    <Card>
                        <PieSurvive surviveArray={data} />
                    </Card>
                </div>
                <CardPassenger passengers={data} />
            </div>
        </>
    );
}
