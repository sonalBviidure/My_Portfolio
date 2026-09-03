import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [150, 'Title cannot exceed 150 characters'],
  },
  tag: {
    type: String,
    trim: true,
    default: '',
  },
  category: {
    type: String,
    trim: true,
    default: 'fullstack',
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  technologies: {
    type: [String],
    default: [],
  },
  githubUrl: {
    type: String,
    trim: true,
    default: '',
  },
  liveUrl: {
    type: String,
    trim: true,
    default: '',
  },
  image: {
    type: String,
    trim: true,
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Project = mongoose.model('Project', projectSchema)

export default Project
