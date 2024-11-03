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
  const result = await SkillService.getSkillFromDB(req.query)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill has been retrieved successfully',
    data: result,
  })
})

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SkillService.updateSkillIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  })
})

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SkillService.deleteSkillFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill has been deleted successfully',
    data: result,
  })
})

export const SkillController = {
  createSkill,
  getSkill,
  deleteSkill,
  updateSkill,
}
