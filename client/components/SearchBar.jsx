/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SearchBar = ({ search, setSearch }) => {
    const [femaleChecked, setFemaleChecked] = useState(false);
    const [maleChecked, setMaleChecked] = useState(false);
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [thirdChecked, setThirdChecked] = useState(false);
    const [sex, setSex] = useState(search.sex);
    const [age, setAge] = useState(search.age);
    const [pclass, setPclass] = useState(search.pclass);
    const [ageChecked, setAgeChecked] = useState(false);

    useEffect(() => {
        femaleChecked && setSex("female");
        maleChecked && setSex("male");
        maleChecked && femaleChecked && setSex("all");
        !maleChecked && !femaleChecked && setSex("all");
    }, [femaleChecked, maleChecked]);

    useEffect(() => {
        firstChecked && setPclass(1);
        secondChecked && setPclass(2);
        thirdChecked && setPclass(3);
        firstChecked && secondChecked && setPclass("1,2");
        firstChecked && thirdChecked && setPclass("1,3");
        secondChecked && thirdChecked && setPclass("2,3");
        firstChecked && secondChecked && thirdChecked && setPclass("all");
        !firstChecked && !secondChecked && !thirdChecked && setPclass("all");
    }, [firstChecked, secondChecked, thirdChecked]);

    useEffect(() => {
        setSearch({ sex, age, pclass });
    }, [age, sex, pclass]);

    useEffect(() => {
        setAge(null);
    }, [ageChecked]);

    return (
        <div
            className="d-flex flex-column align-items-center mx-auto justify-content-between"
            style={{ maxWidth: "18em", height: "11em" }}
        >
            <div className="btn-group w-100" role="group" aria-label="Basic checkbox toggle button group">
                <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheckmale"
                    autoComplete="off"
                    onChange={() => setMaleChecked(!maleChecked)}
                    value="male"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheckmale">
                    Homme{" "}
                </label>

                <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheckfemale"
                    autoComplete="off"
                    onChange={() => setFemaleChecked(!femaleChecked)}
                    value="female"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheckfemale">
                    Femme{" "}
                </label>
            </div>
            <div className="input-group flex-nowrap">
                <label htmlFor="agecheckbox" style={{ marginRight: "10px" }}>
                    <input
                        style={{ verticalAlign: "bottom" }}
                        type="checkbox"
                        id="agecheckbox"
                        autoComplete="off"
                        onChange={() => setAgeChecked(!ageChecked)}
                    />
                </label>
                <span className="input-group-text" id="addon-wrapping">
                    🔎
                </span>
                <select
                    name="selectAge"
                    id="selectAge"
                    className="form-select"
                    aria-label="Age"
                    onChange={(e) => setAge(e.target.value)}
                    disabled={!ageChecked}
                >
                    <option value="all">Tout âge</option>
                    <option value="1">-25</option>
                    <option value="2">25-50</option>
                    <option value="3">50-75</option>
                    <option value="4">75+</option>
                </select>
            </div>

            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheckclass1"
                    autoComplete="off"
                    onChange={() => setFirstChecked(!firstChecked)}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheckclass1">
                    Première Classe
                </label>

                <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheckclass2"
                    autoComplete="off"
                    onChange={() => setSecondChecked(!secondChecked)}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheckclass2">
                    Deuxième Classe
                </label>
                <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheckclass3"
                    autoComplete="off"
                    onChange={() => setThirdChecked(!thirdChecked)}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheckclass3">
                    Troisième Classe
                </label>
            </div>
        </div>
    );
};

export default SearchBar;
