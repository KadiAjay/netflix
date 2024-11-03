const mongoose = require('mongoose');

const connection = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGO_URI);
        if(connected) {
            console.log('Database connected successfully');
        }
    } catch (error) {
        console.log('Database connection failed');
    }
}
module.exports = connection;