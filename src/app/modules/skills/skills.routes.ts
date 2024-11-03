import { Router } from 'express'
import { SkillController } from './skills.controller'

const router = Router()

router.post('/create-skill', SkillController.createSkill)

router.get('/', SkillController.getSkill)

router.put('/:id', SkillController.updateSkill)

router.delete('/:id', SkillController.deleteSkill)

export const SkillRoutes = router
