const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: 'wanderlust_DEV',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    timestamp: Math.floor(Date.now() / 1000),  // <-- Add this
  }),
});

  
  module.exports = {
    cloudinary,
    storage,
  };
