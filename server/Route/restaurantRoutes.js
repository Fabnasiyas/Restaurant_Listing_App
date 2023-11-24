import express from 'express'
import { AddRestaurant, getAllRestaurants } from '../Controller/restaurantController.js'


const router=express.Router()
router.get('/getAllRestaurant',getAllRestaurants)
router.post('/addRestaurants',AddRestaurant)


export default router