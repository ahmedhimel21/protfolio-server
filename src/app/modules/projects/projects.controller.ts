import catchAsync from '../../utility/catchAsync'
import sendResponse from '../../utility/sendResponse'
import { ProjectService } from './projects.service'

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectsIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project has been created successfully',
    data: result,
  })
})

const getProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getProjectFromDB(req.query)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Projects has been retrieved successfully',
    data: result,
  })
})

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectService.updateProjectIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectService.deleteProjectFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project has been deleted successfully',
    data: result,
  })
})

const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectService.getSingleProjectFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project has been retrieved successfully',
    data: result,
  })
})

export const ProjectController = {
  createProject,
  getProject,
  getSingleProject,
  updateProject,
  deleteProject,
}
