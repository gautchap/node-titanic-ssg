import Passengers from "../models/Passenger.js";
import { Router } from "express";

const getRouter = new Router();

getRouter.get("/search", async (req, res) => {
    const Sex = req.query.sex === "all" ? { $or: [{ Sex: "male" }, { Sex: "female" }] } : { Sex: req.query.sex };

    const Age = () => {
        switch (req.query.age) {
            case "all":
                return null;
            case "1":
                return { Age: { $gt: 0, $lt: 25 } };
            case "2":
                return { Age: { $gte: 25, $lt: 50 } };
            case "3":
                return { Age: { $gte: 50, $lt: 75 } };
            case "4":
                return { Age: { $gte: 75 } };
        }
    };

    const Pclass = () => {
        switch (req.query.pclass) {
            case "all":
                return { $or: [{ Pclass: 1 }, { Pclass: 2 }, { Pclass: 3 }] };
            case "1,2":
                return { $or: [{ Pclass: 1 }, { Pclass: 2 }] };
            case "1,3":
                return { $or: [{ Pclass: 1 }, { Pclass: 3 }] };
            case "2,3":
                return { $or: [{ Pclass: 2 }, { Pclass: 3 }] };
            default:
                return { Pclass: parseInt(req.query.pclass) };
        }
    };

    const passengers = new Passengers();

    const searchAll = await passengers.find({ ...Sex, ...Age(), ...Pclass() });

    try {
        const data = await searchAll;
        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});

getRouter.get("/logoutuser", async (req, res) => {
    // res.cookie("access_token", "", {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production" ? true : false,
    //     signed: true,
    //     expires: new Date(1),
    // });
    res.clearCookie("access_token", { httpOnly: true });

    return res.sendStatus(200);
});

export default getRouter;
