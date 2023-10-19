"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const bookingService_controller_1 = require("./bookingService.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), bookingService_controller_1.BookingServiceController.insertIntoDB);
router.get('/', bookingService_controller_1.BookingServiceController.getAllFromDB);
router.get('/:id', bookingService_controller_1.BookingServiceController.getSingleFromDB);
router.patch('/:id', bookingService_controller_1.BookingServiceController.updateFromDB);
router.delete('/:id', bookingService_controller_1.BookingServiceController.deleteFromDB);
exports.BookingServiceRoute = router;
