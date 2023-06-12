/* eslint-disable react/prop-types */
const Signinform = ({
    errorMsg,
    handleConfirmPasswordChange,
    handlePasswordChange,
    handleEmailChange,
    handleSubmit,
}) => {
    return (
        <div className="login-form shadow bg-white rounded-4 p-4">
            {errorMsg}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label">
                        Adresse mail
                    </label>
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        className="form-control"
                        id="emailAddress"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Mot de passe
                    </label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmInputPassword1" className="form-label">
                        Mot de passe
                    </label>
                    <input
                        onChange={handleConfirmPasswordChange}
                        type="password"
                        className="form-control"
                        id="confirmInputPassword1"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    S&apos;inscrire
                </button>
            </form>
        </div>
    );
};

export default Signinform;
