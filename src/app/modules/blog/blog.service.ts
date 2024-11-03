import QueryBuilder from '../../builder/queryBuilder'
import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload)
  return result
}

const getBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(['title', 'content'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await blogQuery.modelQuery
  const metaData = await blogQuery.countTotal()
  return {
    meta: metaData,
    data: result,
  }
}

//update service
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

export const BlogService = {
  createBlogIntoDB,
  getBlogFromDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
}
