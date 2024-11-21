require('dotenv').config();  // Load environment variables

module.exports = {
    url: process.env.MONGO_URI,  // Use MongoDB URL from environment variables
};
