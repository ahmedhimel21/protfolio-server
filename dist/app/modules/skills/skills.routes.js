"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = require("express");
const skills_controller_1 = require("./skills.controller");
const router = (0, express_1.Router)();
router.post('/create-skill', skills_controller_1.SkillController.createSkill);
router.get('/', skills_controller_1.SkillController.getSkill);
exports.SkillRoutes = router;
