const mongoose = require('mongoose');
module.exports = ()=>{
    const connectDB = mongoose.connect('mongodb+srv://645021000882:SfBDQi4CoM1vd3DH@pantip.bomsr5k.mongodb.net/PANTIP_DATA', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((client) => {
    console.log('Connected to MongoDB Atlas');
    const db = client.connection.db;
  })
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
}