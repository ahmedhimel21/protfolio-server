import { Router } from 'express'
import { SkillRoutes } from '../modules/skills/skills.routes'
import { ProjectRoutes } from '../modules/projects/projects.route'
import { BlogRoutes } from '../modules/blog/blog.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/skill',
    route: SkillRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export const routes = router
