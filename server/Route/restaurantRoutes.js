import express from 'express'
import { AddRestaurant, deleteRestaurant, getAllRestaurants } from '../Controller/restaurantController.js'


const router=express.Router()
router.get('/getAllRestaurant',getAllRestaurants)
router.post('/addRestaurants',AddRestaurant)
router.delete('/deleteRestaurant/:id',deleteRestaurant)

export default router