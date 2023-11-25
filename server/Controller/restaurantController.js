import { Restaurant } from '../models/restaurantModel.mjs';
export const getAllRestaurants = async (req,res) => {
    
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
    const { id } = req.params;
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
export const getRestaurantById=async(req,res)=>{
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findOne({
          where: {
            id: id,
          },
        });
        if (restaurant) {
          console.log('Restaurant found:', restaurant.toJSON());
          res.status(200).json( restaurant );
        } else {
          console.log('Restaurant not found');
          res.status(404).json({ error: 'Restaurant not found' });
        }
      } catch (error) {
        console.error('Error fetching restaurant by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
export const updateRestaurant=async(req,res)=>{
    console.log('.............Updateing...........');
    const { id } = req.params;
    console.log('id is...........:',id);
    const { Name, Address, Contact_info } = req.body;
    try {
        await Restaurant.update({
          Name,
          Address,
          Contact_info,
        }, {
          where: { id }, 
        });
    
        return res.status(200).json({ message: 'Restaurant updated successfully' });
      } catch (error) {
        console.error('Error updating restaurant:', error);
        return res.status(500).json({ err: 'Internal server error' });
      }
}