const express = require('express');
const app = express();
require('dotenv').config({});
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./utils/db');

const userRoutes = require("./routes/user.route")

const port = 8000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corOptions = {
    origin: ["http://localhost:3000", "https://shiny-potato-qjw64pp75wwfx5qg-3000.app.github.dev", process.env.FRONTEND_URL],
    credentials: true
}
app.use(cors(corOptions));


app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello world"
    })
})
app.use('/api/v1/user', userRoutes);



app.listen(port, () => {
    connectDB();

    console.log(`app listening at ${port}`);

})