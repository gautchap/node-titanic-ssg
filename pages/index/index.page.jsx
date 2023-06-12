import LoginForm from "../../client/components/LoginForm";
import { useState } from "react";
import { logUser } from "../../client/api/signin";
import boat from "../../client/assets/boat.svg";

export { Page };

export const documentProps = {
    title: "Titanic Data || Se connecter",
    description: "Our mission is to explore the galaxy.",
};

function Page() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [animated, setAnimated] = useState(false);

    const handleSubmit = async (ev) => {
        setErrorMsg(null);
        ev.preventDefault();
        const mail = ev.target.emailAddress.value;
        const pass = ev.target.password.value;

        if (mail.trim() === "" || pass.trim() === "") {
            setErrorMsg(
                <div className="alert alert-danger" role="alert">
                    L&apos;adresse mail ou le mot de passe ne sont pas saisies
                </div>
            );
            return;
        }
        try {
            const isLogged = await logUser(mail, pass);

            if (isLogged) {
                return (window.location.href = "/stats");
            }

            setErrorMsg(
                <div className="alert alert-danger" role="alert">
                    L&apos;adresse mail ou le mot de passe ne correspondent pas
                </div>
            );
        } catch (error) {
            setErrorMsg(
                <div className="alert alert-danger" role="alert">
                    Une erreur serveur est survenue
                </div>
            );
        }
    };

    const handleAnimation = () => {
        setAnimated(!animated);
        setTimeout(() => {
            setAnimated(false);
        }, 4000);
    };

    return (
        <>
            <img
                src={boat}
                alt="titanic"
                className={animated ? "login-img animated-img" : "login-img"}
                onClick={handleAnimation}
            />

            <LoginForm errorMsg={errorMsg} handleSubmit={handleSubmit} />
        </>
    );
}
