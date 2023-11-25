import { Restaurant } from '../models/restaurantModel.mjs';
export const getAllRestaurants = async (req,res) => {
    console.log('vghvhvhghhhghggu');
    try {
        const allRestaurants = await Restaurant.findAll();
        console.log(allRestaurants);
        res.json(allRestaurants)

    } catch (error) {
        console.error('Error retrieving restaurants:', error);
    }
}
export const AddRestaurant = async (req, res) => {
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

export const deleteRestaurant=async(req,res)=>{
    console.log('.............Deleting...........');
    const { id } = req.params;
    console.log('id is...........:',id);
    try {
        const restaurant = await Restaurant.findByPk(id);   
        if (!restaurant) {
          return res.status(404).json({ err: 'Restaurant not found' });
        }
        await restaurant.destroy();
    
        res.json({ success: true });
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
}