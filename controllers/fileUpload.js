const path = require("path");
const fs = require("fs");
const File = require("../models/upload.model");

exports.imageUpload = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const file = req.files.file;
    console.log(file);

    const uploadDir = path.join(__dirname, "files");

    // Ensure the directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);
    file.mv(filePath, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "File upload failed",
        });
      }

      // Save file information to the database
      const newFile = new File({
        name: file.name,
        imageUrl: filePath,
        tags: req.body.tags || "",
        email: req.body.email || "",
      });

      try {
        await newFile.save();
        res.json({
          success: true,
          message: "Local file uploaded and saved successfully",
        });
      } catch (dbError) {
        console.error(dbError);
        res.status(500).json({
          success: false,
          message: "File uploaded but failed to save to database",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};
