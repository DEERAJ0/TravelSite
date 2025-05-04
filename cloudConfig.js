const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowed_formats: ["jpg", "png", "jpeg"],
    },
});

// Generate Signature for Debugging
const params = {
    folder: "wanderlust_DEV",
    allowed_formats: ["jpg", "png", "jpeg"],
    timestamp: Math.floor(Date.now() / 1000), // Current timestamp in seconds
};
const signature = cloudinary.utils.api_sign_request(params, process.env.CLOUD_API_SECRET);
console.log("Generated Signature:", signature);

// Exporting Cloudinary and Storage
module.exports = {
    cloudinary,
    storage,
};
