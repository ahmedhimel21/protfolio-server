import { TSkill } from './skills.interface'
import { Skill } from './skills.model'

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload)
  return result
}

const getSkillFromDB = async () => {
  const result = await Skill.find()
  return result
}

export const SkillService = {
  createSkillIntoDB,
  getSkillFromDB,
}
