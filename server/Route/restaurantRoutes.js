import express from 'express'
import { AddRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from '../Controller/restaurantController.js'


const router=express.Router()
router.get('/getAllRestaurant',getAllRestaurants)
router.post('/addRestaurants',AddRestaurant)
router.delete('/deleteRestaurant/:id',deleteRestaurant)
router.get('/getRestaurant/:id',getRestaurantById)
router.put('/updateRestaurant/:id',updateRestaurant)

export default router