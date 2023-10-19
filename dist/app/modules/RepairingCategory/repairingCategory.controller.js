"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairingCategoryController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const repairingCategory_service_1 = require("./repairingCategory.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const repairingCategory_constant_1 = require("./repairingCategory.constant");
const fileUploaderHelper_1 = require("../../../helpers/fileUploaderHelper");
// const insertIntoDB = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success:true,
//         message:"Repairing Category created success",
//         data:result
//     })
// })
const reportPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield repairingCategory_service_1.RepairingCategoryService.reportPost(user === null || user === void 0 ? void 0 : user.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Reported success',
        data: result,
    });
}));
const deleteReport = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reportId } = req.params;
    const result = yield repairingCategory_service_1.RepairingCategoryService.deleteReport(reportId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Deleted success',
        data: result,
    });
}));
const insertIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.file);
    const user = req.user;
    console.log(req);
    const file = req.file;
    const uploadFile = yield fileUploaderHelper_1.FileUploaderHelper.uploadToCloudinary(file);
    if (uploadFile) {
        req.body.image = uploadFile.secure_url;
    }
    if (user) {
        req.body.userId = user.id;
    }
    const result = yield repairingCategory_service_1.RepairingCategoryService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category created success',
        data: result,
    });
}));
const getAllFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, repairingCategory_constant_1.RepairingCategoryFilterAbleFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield repairingCategory_service_1.RepairingCategoryService.getAllFromDB(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category data fetched!!',
        meta: result.meta,
        data: result.data,
    });
}));
const updateBookingIncremnet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repairingCategory_service_1.RepairingCategoryService.updateBookingIncremnet(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category booking increament update success',
        data: result,
    });
}));
const updateBookingDecreamnet = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repairingCategory_service_1.RepairingCategoryService.updateBookingDecreamnet(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category booking decreament update success',
        data: result,
    });
}));
const updateRating = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repairingCategory_service_1.RepairingCategoryService.updateRating(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category rating update',
        data: result,
    });
}));
const reviewPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repairingCategory_service_1.RepairingCategoryService.reviewPost(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category review post success',
        data: result,
    });
}));
const updateIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield repairingCategory_service_1.RepairingCategoryService.updateIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category  update success',
        data: result,
    });
}));
const deleteFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield repairingCategory_service_1.RepairingCategoryService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category  delete success',
        data: result,
    });
}));
const getSingleFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield repairingCategory_service_1.RepairingCategoryService.getSingleFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Repairing Category  single data success',
        data: result,
    });
}));
exports.RepairingCategoryController = {
    insertIntoDB,
    getAllFromDB,
    updateBookingDecreamnet,
    updateBookingIncremnet,
    updateIntoDB,
    deleteFromDB,
    getSingleFromDB,
    reviewPost,
    updateRating,
    deleteReport,
    reportPost,
};
