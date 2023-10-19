"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const catagory_controller_1 = require("./catagory.controller");
const router = express_1.default.Router();
router.post('/create-category', catagory_controller_1.CategoryController.insertIntoDB);
router.get('/', catagory_controller_1.CategoryController.getAllFromDB);
router.get('/:id', catagory_controller_1.CategoryController.getSingleFromDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), catagory_controller_1.CategoryController.deleteFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), catagory_controller_1.CategoryController.updateIntoDB);
exports.CategoryRoute = router;
