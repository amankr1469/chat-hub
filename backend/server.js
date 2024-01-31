
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConfig from "./db/dbConfig.js";
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.listen(PORT, () => {
	dbConfig();
	console.log(`Server Running on port ${PORT}`);
});
