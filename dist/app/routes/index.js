"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const skills_routes_1 = require("../modules/skills/skills.routes");
const projects_route_1 = require("../modules/projects/projects.route");
const blog_route_1 = require("../modules/blog/blog.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/skill',
        route: skills_routes_1.SkillRoutes,
    },
    {
        path: '/project',
        route: projects_route_1.ProjectRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.routes = router;
