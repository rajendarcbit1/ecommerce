const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

// Routes
const productsRouter = require("./routes/products");

// Connecting to DB
try {
    mongoose.connect(
        process.env.DB_CONNECT,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Connected to DB")
    );
} catch (err) {
    console.log(err);
}

app.use(express.json());
app.use(cors());

// Routes
app.use("/products", productsRouter);

app.listen(process.env.DB_PORT, () =>
    console.log("Connected on PORT %d", process.env.DB_PORT)
);
