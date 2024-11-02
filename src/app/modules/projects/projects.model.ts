import { model, Schema } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['MERN', 'REACT', 'JAVASCRIPT'],
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Project = model<TProject>('project', projectSchema)
