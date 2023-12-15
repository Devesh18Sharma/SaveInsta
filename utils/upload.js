const cloudinary = require('cloudinary').v2; // Assuming you have the Cloudinary Node.js SDK installed

export const uploadToCloudinary = async (content) => {
  cloudinary.config({
    cloud_name: 'instasaver',
    api_key: '177949736225313',
    api_secret: '3Y_MhJ6SNgGuHJxr33SpJxK-aJA',
  });

  try {
    const result = await cloudinary.uploader.upload(content, {
      resource_type: 'auto',
    });
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};


