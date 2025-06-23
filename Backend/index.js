const express = require("express")
const app = express();
app.use(express.json())
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user")
require('dotenv').config();

const cors = require('cors')    

app.use(cors())

app.use("/api/v1/user",userRouter);


async function main(app) {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3100)
}
 

main(app)
