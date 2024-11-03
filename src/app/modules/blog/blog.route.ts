import { Router } from 'express'
import { BlogController } from './blog.controller'

const router = Router()

router.post('/create-blog', BlogController.createBlog)

router.get('/', BlogController.getBlog)

router.get('/:id', BlogController.getSingleBlog)

router.put('/:id', BlogController.updateBlog)

router.delete('/:id', BlogController.deleteBlog)

export const BlogRoutes = router
