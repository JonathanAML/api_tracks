// netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const { getItems, getItem } = require("../../app/controlles/tracks");
const song=require("../../public/track-1")
const song= "C:\Users\jonat\Documents\miportafolio\node-api-tracks\public\track-1.mp3"

const app = express();
app.use(cors());

const router = express.Router();

router.get("/:id", getItem);

app.use("/.netlify/functions/item", router);
module.exports.handler = serverless(app);
