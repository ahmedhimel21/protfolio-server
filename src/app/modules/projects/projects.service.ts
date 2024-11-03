import QueryBuilder from '../../builder/queryBuilder'
import { TProject } from './project.interface'
import { Project } from './projects.model'

const createProjectsIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload)
  return result
}

const getProjectFromDB = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(['title', 'description'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await projectQuery.modelQuery
  const metaData = await projectQuery.countTotal()
  return {
    meta: metaData,
    data: result,
  }
}

//update service
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id)
  return result
}

const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

export const ProjectService = {
  createProjectsIntoDB,
  getProjectFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
}
