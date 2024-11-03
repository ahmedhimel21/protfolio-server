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
  const result = await BlogService.getBlogFromDB(req.query)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blogs has been retrieved successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogService.updateBlogIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogService.deleteBlogFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog has been deleted successfully',
    data: result,
  })
})

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogService.getSingleBlogFromDB(id)
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
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
