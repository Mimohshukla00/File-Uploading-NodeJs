const cloudinary = require("cloudinary").v2; // Use the v2 of the cloudinary API
require("dotenv").config();

exports.cloudinaryConnect = () => {
  try {
    if (
      !process.env.CLOUDINARY_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      throw new Error(
        "Missing Cloudinary configuration in environment variables"
      );
    }

    console.log("Connecting to Cloudinary...");
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Cloudinary connection successful.");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error.message);
  }
};
