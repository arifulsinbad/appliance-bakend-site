import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadedFile } from '../interfaces/file';
import config from '../config';

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, 'uploads/');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
const uploadToCloudinary = async (
  file: IUploadedFile
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, rejects) => {
    cloudinary.uploader.upload(
      file.path,
      (error: Error, result: ICloudinaryResponse) => {
        fs.unlinkSync(file.path);
        if (error) {
          rejects(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const FileUploaderHelper = {
  uploadToCloudinary,
  upload,
};
