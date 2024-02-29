const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectMongoDB = require("./configs/dbConnection");
const dotenv = require("dotenv").config();

const spendRoutes = require("./routes/spendRoutes");
const splitRoutes = require("./routes/splitRoutes");

connectMongoDB();

const app = express();

const port = process.env.port || 5000;

//json parser
app.use(express.json());

app.use("/spendwise/spend", spendRoutes);

app.use("/spendwise/split", splitRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})