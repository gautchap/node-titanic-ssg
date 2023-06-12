import express from "express";
import compression from "compression";
import { renderPage } from "vite-plugin-ssr/server";
const isProduction = process.env.NODE_ENV === "production" ? true : false;
import { root } from "./root.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routers/postAPI.js";
import getRouter from "./routers/getAPI.js";
import authGuard from "./middlewares/authGuard.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cookieParser());

app.use(compression());

if (isProduction) {
    const sirv = require("sirv");
    app.use(sirv(`${root}/dist/client`));
} else {
    const vite = require("vite");
    const viteDevMiddleware = (
        await vite.createServer({
            root,
            server: { middlewareMode: true },
        })
    ).middlewares;
    app.use(viteDevMiddleware);
}

app.use(express.json());
app.use("/api/post", postRouter);
app.use("/api/get", authGuard, getRouter);
app.get("*", async (req, res, next) => {
    const pageContextInit = {
        urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    const { body, statusCode, contentType, earlyHints } = httpResponse;
    if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    res.status(statusCode).type(contentType).send(body);
});

const port = process.env.APP_PORT || 3000;

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connexion MonboDB établie!");

    app.listen(port, () => console.log(`✅ L'application écoute sur http://localhost:${port}`));
} catch (err) {
    console.log("❌ Impossible de démarrer l'application Node", err.message);
}

export default app;
