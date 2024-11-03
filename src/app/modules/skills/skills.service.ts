import QueryBuilder from '../../builder/queryBuilder'
import { skillSearchAbleFields } from './SkillConstant'
import { TSkill } from './skills.interface'
import { Skill } from './skills.model'

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload)
  return result
}

const getSkillFromDB = async (query: Record<string, unknown>) => {
  const skillQuery = new QueryBuilder(Skill.find(), query)
    .search(skillSearchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await skillQuery.modelQuery
  const metaData = await skillQuery.countTotal()
  return {
    meta: metaData,
    data: result,
  }
}

//update service
const updateSkillIntoDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id)
  return result
}

export const SkillService = {
  createSkillIntoDB,
  getSkillFromDB,
  deleteSkillFromDB,
  updateSkillIntoDB,
}
