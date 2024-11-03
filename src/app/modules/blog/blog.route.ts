import { Router } from 'express'
import { BlogController } from './blog.controller'

const router = Router()

router.post('/create-blog', BlogController.createBlog)

router.get('/', BlogController.getBlog)

router.get('/:id', BlogController.getSingleBlog)

export const BlogRoutes = router
