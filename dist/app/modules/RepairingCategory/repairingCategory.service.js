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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairingCategoryService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const repairingCategory_constant_1 = require("./repairingCategory.constant");
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const result = yield prisma_1.default.repairingCategory.create({
        data: data,
        include: {
            user: true,
        },
    });
    return result;
});
const getAllFromDB = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    console.log(options);
    const andConditons = [];
    if (searchTerm) {
        andConditons.push({
            OR: repairingCategory_constant_1.RepairingCategorySearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditons.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    /**
     * person = { name: 'fahim' }
     * name = person[name]
     *
     */
    const whereConditons = andConditons.length > 0 ? { AND: andConditons } : {};
    const result = yield prisma_1.default.repairingCategory.findMany({
        where: whereConditons,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : {
                createdAt: 'desc',
            },
        include: {
            user: true,
            reviews: true,
            bookingServices: true,
            RepairingPayment: {
                include: {
                    user: true,
                    repairingCategory: true,
                },
            },
            reportServices: {
                include: {
                    user: true,
                    repairingCategory: true,
                },
            },
        },
    });
    const total = yield prisma_1.default.repairingCategory.count();
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
});
const getSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.repairingCategory.findUnique({
        where: {
            id: id,
        },
        include: {
            reviews: true,
        },
    });
    return result;
});
const updateBookingIncremnet = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.repairingCategory.update({
        where: {
            id: data.id,
        },
        data: {
            status: false,
        },
    });
    return result;
});
const updateRating = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const result = yield prisma_1.default.repairingCategory.update({
        where: {
            id: data.id,
        },
        data: {
            rating: {
                increment: data.rating,
            },
        },
    });
    return result;
});
const updateBookingDecreamnet = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.repairingCategory.update({
        where: {
            id: data.id,
        },
        data: {
            status: true,
        },
    });
    return result;
});
const updateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.repairingCategory.update({
        where: {
            id: id,
        },
        data,
    });
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.repairingCategory.delete({
        where: {
            id: id,
        },
    });
    return result;
});
const reviewPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.review.create({
        data,
    });
    return result;
});
const reportPost = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    data.userId = id;
    console.log(data);
    const result = yield prisma_1.default.reportService.create({
        data,
    });
    return result;
});
const deleteReport = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reportService.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.RepairingCategoryService = {
    insertIntoDB,
    getAllFromDB,
    getSingleFromDB,
    updateBookingIncremnet,
    updateBookingDecreamnet,
    updateIntoDB,
    deleteFromDB,
    reviewPost,
    updateRating,
    reportPost,
    deleteReport,
};
