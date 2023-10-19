"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairingCategorySchema = void 0;
const zod_1 = require("zod");
const repairingCategorySchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: 'Title is required',
    }),
    rating: zod_1.z.string().optional(),
    image: zod_1.z.string({
        required_error: 'Title is required',
    }),
    address: zod_1.z.string({
        required_error: 'Title is required',
    }),
    details: zod_1.z.string({
        required_error: 'Title is required',
    }),
    bookingCount: zod_1.z.number().optional(),
    status: zod_1.z.boolean().optional(),
});
exports.RepairingCategorySchema = {
    repairingCategorySchema,
};
