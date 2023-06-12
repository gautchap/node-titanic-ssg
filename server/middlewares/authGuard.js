import jwt from "jsonwebtoken";

export default function authGuard(req, res, next) {
    const { access_token } = req.cookies;

    if (!access_token) {
        return res.sendStatus(401);
    }

    jwt.verify(access_token, process.env.SECRET_JWT, (err) => {
        if (err) {
            return res.sendStatus(401);
        }
        next();
    });
}
