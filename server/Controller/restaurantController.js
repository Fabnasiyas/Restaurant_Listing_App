import { Restaurant } from '../models/restaurantModel.mjs';
export const getAllRestaurants=async ()=>{
    try {
       console.log('====================================');
       console.log('vghvhvhghhhghggu');
       console.log('===================================='); 
    } catch (error) {
        
    }
}
export const AddRestaurant=async(req,res)=>{
    console.log('welcomeeee');
    console.log(req.body);
    try {
        const { Name, Address, Contact_info } = req.body;
        const createdRestaurant = await Restaurant.create({
            Name,
            Address,
            Contact_info,
          });
          console.log('successfully Inserted data:', createdRestaurant);
          res.status(201).json({ success: true, message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });   
    }
}