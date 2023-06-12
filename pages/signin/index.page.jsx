import SigninForm from "../../client/components/SigninForm";
import { useState } from "react";
import { signUser } from "../../client/api/signin";
import boat from "../../client/assets/boat.svg";

export { Page };

export const documentProps = {
    title: "Titanic Data || S'inscrire",
    description: "Our mission is to explore the galaxy.",
};

function Page() {
    const [mailAdress, setMailAdress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const [animated, setAnimated] = useState(false);

    const handleEmailChange = (e) => {
        setMailAdress(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMsg(
                <div className="alert alert-danger" role="alert">
                    Veuillez confirmer votre mot de passe
                </div>
            );
            return;
        }
        try {
            const isSigned = await signUser(mailAdress, password);
            if (!isSigned) {
                setErrorMsg(
                    <div className="alert alert-danger" role="alert">
                        L&apos;utilisateur existe déjà <a href="/login">Se connecter</a>
                    </div>
                );
                return;
            }
            return (window.location.href = "/stats");
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
            <SigninForm
                errorMsg={errorMsg}
                handleEmailChange={handleEmailChange}
                handleConfirmPasswordChange={handleConfirmPasswordChange}
                handleSubmit={handleSubmit}
                handlePasswordChange={handlePasswordChange}
            />
        </>
    );
}
