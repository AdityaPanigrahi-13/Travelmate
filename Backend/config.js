require('dotenv').config(); // ✅ Add this here to load .env variables in this file

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

module.exports = {
  JWT_USER_PASSWORD
};
