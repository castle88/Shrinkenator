const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 2121;
const linkRoutes = require("./routes/linkRoutes");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/link", linkRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running port: ${port}`));
