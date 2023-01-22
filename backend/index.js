const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();  

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connected"))
.catch((err)=> {console.error(err)});

app.use(express.json()); //verifies the json for the server
app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/backend/movies", movieRoute);
app.use("/backend/lists", listRoute);

app.listen(8800, ()=>{
    console.log("backend is running")
}); 