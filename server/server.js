// import express from "express";
// import morgan from "morgan";
// import cors from 'cors'
// import mysql from 'mysql2'
// import db from './models/restaurantModel.mjs'
// import RestaurantRouter from './Route/restaurantRoutes.js'
// const app = express()

// app.use(cors({ origin: ['http://localhost:3000'] }))
// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use('/', RestaurantRouter)
// db.sequelize.sync().then((req) => {


//     app.listen(5000, () => {
//         console.log('server connected');
//     })
// });


import { sequelize, Restaurant } from './models/restaurantModel.mjs';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import RestaurantRouter from './Route/restaurantRoutes.js';

const app = express();

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', RestaurantRouter);

sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log('server connected');
    });
});
