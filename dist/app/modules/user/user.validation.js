"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        role: zod_1.z
            .enum(['admin', 'user', 'super_admin'], {
            required_error: 'Role is required',
        })
            .optional(),
        gender: zod_1.z
            .enum(['male', 'female', 'others'], {
            required_error: 'Gender is required',
        })
            .optional(),
        contactNo: zod_1.z.string({
            required_error: ' Contact No is required',
        }),
        dateOfBirth: zod_1.z.string({
            required_error: ' Date of birth is required',
        }),
        address: zod_1.z.string({
            required_error: ' Address is required',
        }),
        profileImg: zod_1.z
            .string({
            required_error: ' Profile Img is required',
        })
            .optional(),
    }),
});
exports.UserValidation = {
    create,
};
