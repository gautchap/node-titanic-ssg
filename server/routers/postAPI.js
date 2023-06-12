import { Router } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const postRouter = new Router();

postRouter.post("/signuser", async (req, res) => {
    const { mail, password } = req.body;

    const hash = await bcrypt.hash(password, 8);

    const user = new User();

    const isSigned = await user.emailExists(mail);

    if (isSigned) {
        return res.sendStatus(409);
    }

    const add = await user.add({ email: mail, password: hash });

    if (await add) {
        const jsonwebtoken = jwt.sign({ email: mail, date: Date.now() }, process.env.SECRET_JWT);
        res.cookie("access_token", jsonwebtoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 360000,
            signed: true,
        });
        return res.sendStatus(201);
    }

    return res.sendStatus(500);
});

postRouter.post("/loguser", async (req, res) => {
    const { mail, password } = req.body;

    const user = new User();

    const isUser = await user.getUserByEmail(mail);

    if (bcrypt.compareSync(password, isUser.password)) {
        const jsonwebtoken = jwt.sign({ email: mail, date: Date.now() }, process.env.SECRET_JWT);

        res.cookie("access_token", jsonwebtoken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 360000,
            // signed: true,
        });
        return res.sendStatus(201);
    }

    return res.sendStatus(401);
});

export default postRouter;
