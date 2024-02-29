const express = require("express");
const dotenv = require("dotenv").config();

const spendRoutes = require("./routes/spendRoutes");
const splitRoutes = require("./routes/splitRoutes");

const app = express();

const port = process.env.port || 5000;

app.use("/spendwise/spend", spendRoutes);

app.use("/spendwise/split", splitRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})