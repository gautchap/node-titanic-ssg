import { URL } from "./url.js";

export async function signUser(mail, password) {
    const res = await fetch(`${URL}/api/post/signuser`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ mail, password }),
    });
    if (res.status > 400) {
        return false;
    }
    if (res.status === 201) {
        return true;
    }
}

export async function logUser(mail, password) {
    const res = await fetch(`${URL}/api/post/loguser`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ mail, password }),
    });

    if (res.status > 400) {
        return false;
    }
    if (res.status === 201) {
        return true;
    }
}

export async function logOutUser() {
    const res = await fetch(`${URL}/api/get/logoutuser`, {
        method: "GET",
        "Cache-Control": "no-store",
    });

    if (res.status > 400) {
        return false;
    }
    if (res.status === 200) {
        return true;
    }
}
