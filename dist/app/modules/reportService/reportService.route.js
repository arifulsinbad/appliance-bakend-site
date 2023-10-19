"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const reportService_controller_1 = require("./reportService.controller");
const router = express_1.default.Router();
router.post('/', reportService_controller_1.ReportServiceController.insertIntoDB);
router.get('/', reportService_controller_1.ReportServiceController.getAllFromDB);
router.delete('/:id', reportService_controller_1.ReportServiceController.deleteFromDB);
exports.ReportServiceRoute = router;
