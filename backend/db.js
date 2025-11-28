const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/gofoodmern';

const mongoDB = async (callback) => {
  try {
    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB');

    const foodCollection = mongoose.connection.db.collection('food_items');
    const foodData = await foodCollection.find({}).toArray();

    const categoryCollection = mongoose.connection.db.collection('foodCategory');
    const categoryData = await categoryCollection.find({}).toArray();

    // Assign data to global variables
    global.food_items = foodData;
    global.foodCategory = categoryData;

    callback(null, foodData, categoryData);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    callback(error, null, null);
  }
};

module.exports = mongoDB;