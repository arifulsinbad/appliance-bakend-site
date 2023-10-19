"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairingPaymentRoute = void 0;
const express_1 = __importDefault(require("express"));
const repairingPayment_controller_1 = require("./repairingPayment.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), repairingPayment_controller_1.RepairingPaymentController.insertIntoDB);
router.get('/', repairingPayment_controller_1.RepairingPaymentController.getAllFromDB);
router.delete('/:id', repairingPayment_controller_1.RepairingPaymentController.deleteFromDB);
exports.RepairingPaymentRoute = router;
