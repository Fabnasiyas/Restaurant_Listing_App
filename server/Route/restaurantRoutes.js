import express from 'express'
import { getAllRestaurants } from '../Controller/restaurantController.js'


const router=express.Router()
router.get('/getAllRestaurant',getAllRestaurants)



export default router