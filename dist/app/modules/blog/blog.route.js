"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.post('/create-blog', blog_controller_1.BlogController.createBlog);
router.get('/', blog_controller_1.BlogController.getBlog);
exports.BlogRoutes = router;
