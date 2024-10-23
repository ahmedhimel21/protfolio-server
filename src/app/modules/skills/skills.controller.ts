import catchAsync from '../../utility/catchAsync'
import sendResponse from '../../utility/sendResponse'
import { SkillService } from './skills.service'

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill has been created successfully',
    data: result,
  })
})

const getSkill = catchAsync(async (req, res) => {
  const result = await SkillService.getSkillFromDB()
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill has been retrieved successfully',
    data: result,
  })
})

export const SkillController = {
  createSkill,
  getSkill,
}
