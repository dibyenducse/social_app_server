import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './routes/AuthRoute.js';
//Routes

const app = express();

//Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//uses of routes
app.use('/auth', AuthRoute);

dotenv.config();

mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(process.env.PORT, () => {
            console.log(`Listening at ${process.env.PORT} Successfully`);
            console.log(`App run at ${process.env.PORT}`);
        })
    )
    .catch((error) => console.log(error));
