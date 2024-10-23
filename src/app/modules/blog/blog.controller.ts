import catchAsync from '../../utility/catchAsync'
import sendResponse from '../../utility/sendResponse'
import { BlogService } from './blog.service'

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlogIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog has been created successfully',
    data: result,
  })
})

const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogFromDB()
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog has been retrieved successfully',
    data: result,
  })
})

export const BlogController = {
  createBlog,
  getBlog,
}
