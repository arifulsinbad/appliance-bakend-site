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
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.role = 'admin';
    const userExist = yield prisma_1.default.user.findFirst({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    if ((userExist === null || userExist === void 0 ? void 0 : userExist.email) === data.email ||
        (userExist === null || userExist === void 0 ? void 0 : userExist.password) === data.password) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Already email and password Created');
    }
    const result = yield prisma_1.default.user.create({
        data,
    });
    return result;
});
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.role = 'user';
    const userExist = yield prisma_1.default.user.findFirst({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    if ((userExist === null || userExist === void 0 ? void 0 : userExist.email) === data.email ||
        (userExist === null || userExist === void 0 ? void 0 : userExist.password) === data.password) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Already email and password Created');
    }
    const result = yield prisma_1.default.user.create({
        data,
    });
    return result;
});
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany();
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    return result;
});
const getSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    return result;
});
exports.UserService = {
    createAdmin,
    createUser,
    updateIntoDB,
    deleteFromDB,
    getAllFromDB,
    getSingleFromDB,
};
