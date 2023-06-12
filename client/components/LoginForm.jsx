/* eslint-disable react/prop-types */

const LoginForm = ({ errorMsg, handleSubmit }) => {
    return (
        <div className="login-form shadow bg-white rounded-4 p-4">
            <form onSubmit={handleSubmit}>
                {errorMsg}
                <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label">
                        Adresse mail
                    </label>
                    <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Mot de passe
                    </label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary me-2">
                    Se connecter
                </button>

                <a href="/signin">S&apos;inscrire</a>
            </form>
        </div>
    );
};

export default LoginForm;
