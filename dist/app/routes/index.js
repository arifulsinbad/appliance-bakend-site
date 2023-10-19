"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const myProfile_route_1 = require("../modules/MyProfile/myProfile.route");
const catagory_route_1 = require("../modules/catagory/catagory.route");
const user_route_1 = require("../modules/user/user.route");
const repairingCategory_route_1 = require("../modules/RepairingCategory/repairingCategory.route");
const bookingService_route_1 = require("../modules/BookingService/bookingService.route");
const repairingPayment_route_1 = require("../modules/repairingPayment/repairingPayment.route");
const reportService_route_1 = require("../modules/reportService/reportService.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        routes: auth_route_1.AuthRoute,
    },
    {
        path: '/users',
        routes: user_route_1.UserRoute,
    },
    {
        path: '/categories',
        routes: catagory_route_1.CategoryRoute,
    },
    {
        path: '/profile',
        routes: myProfile_route_1.MyProfileRoute,
    },
    {
        path: '/payments',
        routes: repairingPayment_route_1.RepairingPaymentRoute,
    },
    {
        path: '/repairingCategories',
        routes: repairingCategory_route_1.RepairingCategoryRoute,
    },
    {
        path: '/bookingServices',
        routes: bookingService_route_1.BookingServiceRoute,
    },
    {
        path: '/repairingPayments',
        routes: repairingPayment_route_1.RepairingPaymentRoute,
    },
    {
        path: '/reportServices',
        routes: reportService_route_1.ReportServiceRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
