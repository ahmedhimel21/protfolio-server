import { Router } from 'express'
import { ProjectController } from './projects.controller'

const router = Router()

router.post('/create-project', ProjectController.createProject)

router.get('/', ProjectController.getProject)

router.get('/:id', ProjectController.getSingleProject)

router.put('/:id', ProjectController.updateProject)

router.delete('/:id', ProjectController.deleteProject)

export const ProjectRoutes = router
