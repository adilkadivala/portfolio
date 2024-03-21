const { z } = require("zod");

// login validation
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is require" })
    .trim()
    .email({ message: "Invalid email address" }),

  password: z
    .string({ required_error: "Password is require" })
    .trim()
    .min(7, { message: "Password must be at lest of 7 chars" })
    .max(20, { message: "Password must not be more than 20 charactor " }),
});

// signup validation
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars" })
    .max(255, { message: "Name must not be more than 255 charactor " }),

  phone: z
    .string({ required_error: "Phone is require" })
    .trim()
    .min(10, { message: "Phone number must be at lest of 10 chars" })
    .max(10, { message: "Phone number must not be more than 10 charactor " }),
});

module.exports = { loginSchema, signupSchema };
