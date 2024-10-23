import { TProject } from './project.interface'
import { Project } from './projects.model'

const createProjectsIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload)
  return result
}

const getProjectFromDB = async () => {
  const result = await Project.find()
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
}
