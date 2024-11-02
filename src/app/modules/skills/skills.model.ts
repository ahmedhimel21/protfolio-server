import { model, Schema } from 'mongoose'
import { TSkill } from './skills.interface'

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['FRONTEND', 'BACKEND', 'OTHERS'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Skill = model<TSkill>('skill', skillSchema)
