const mongoose = require('mongoose');
require('dotenv').config();

const MongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully');
    
    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
    global.food_items = data;
    // console.log(global.food_items);
    
  } catch (err) {
    console.log('Error', err);
  }
};

module.exports = MongoDB;
