"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairingCategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const repairingCategory_controller_1 = require("./repairingCategory.controller");
const fileUploaderHelper_1 = require("../../../helpers/fileUploaderHelper");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), fileUploaderHelper_1.FileUploaderHelper.upload.single('file'), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return repairingCategory_controller_1.RepairingCategoryController.insertIntoDB(req, res, next);
});
router.get('/', repairingCategory_controller_1.RepairingCategoryController.getAllFromDB);
router.post('/review', repairingCategory_controller_1.RepairingCategoryController.reviewPost);
router.patch('/rating', repairingCategory_controller_1.RepairingCategoryController.updateRating);
router.get('/:id', repairingCategory_controller_1.RepairingCategoryController.getSingleFromDB);
router.patch('/booking-increment', repairingCategory_controller_1.RepairingCategoryController.updateBookingIncremnet);
router.patch('/booking-decreament', repairingCategory_controller_1.RepairingCategoryController.updateBookingDecreamnet);
router.post('/report', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), repairingCategory_controller_1.RepairingCategoryController.reportPost);
router.delete('/reportId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), repairingCategory_controller_1.RepairingCategoryController.deleteReport);
router.patch('/:id', repairingCategory_controller_1.RepairingCategoryController.updateIntoDB);
router.delete('/:id', repairingCategory_controller_1.RepairingCategoryController.deleteFromDB);
exports.RepairingCategoryRoute = router;
