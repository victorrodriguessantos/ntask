import express from "express";
import consign from "consign";

const app = express();
app.use(express.json())

consign()
// .include("db.js")
.include("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);