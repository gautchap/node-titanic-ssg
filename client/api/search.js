import { URL } from "./url.js";

export const searchPassenger = async (Sex, Age, Pclass) => {
    const res = await fetch(`${URL}/api/get/search?sex=${Sex}&age=${Age}&pclass=${Pclass}`, {
        method: "GET",
    });

    const json = await res.json();
    return json;
};
