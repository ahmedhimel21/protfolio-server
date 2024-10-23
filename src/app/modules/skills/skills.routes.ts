import { Router } from 'express'
import { SkillController } from './skills.controller'

const router = Router()

router.post('/create-skill', SkillController.createSkill)

router.get('/', SkillController.getSkill)

export const SkillRoutes = router
