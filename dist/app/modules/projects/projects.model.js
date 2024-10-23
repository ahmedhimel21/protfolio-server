"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['MERN', 'REACT', 'JAVASCRIPT'],
        required: true,
    },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)('project', projectSchema);
