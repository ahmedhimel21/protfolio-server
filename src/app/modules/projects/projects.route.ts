import { Router } from 'express'
import { ProjectController } from './projects.controller'

const router = Router()

router.post('/create-project', ProjectController.createProject)

router.get('/', ProjectController.getProject)

router.get('/:id', ProjectController.getSingleProject)

export const ProjectRoutes = router
