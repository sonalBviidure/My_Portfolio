import mongoose from 'mongoose'
import Project from '../models/Project.js'

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    })
  } catch (error) {
    return next(error)
  }
}

/**
 * @desc    Get single project by ID
 * @route   GET /api/projects/:id
 * @access  Public
 */
export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Project ID format',
      })
    }

    const project = await Project.findById(id)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      })
    }

    return res.status(200).json({
      success: true,
      data: project,
    })
  } catch (error) {
    return next(error)
  }
}

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 * @access  Public / Dev
 */
export const createProject = async (req, res, next) => {
  try {
    const { title, tag, category, description, technologies, githubUrl, liveUrl, image, featured } = req.body

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Project title is required.',
      })
    }

    const project = await Project.create({
      title: title.trim(),
      tag: tag ? tag.trim() : '',
      category: category ? category.trim() : 'fullstack',
      description: description ? description.trim() : '',
      technologies: Array.isArray(technologies) ? technologies : [],
      githubUrl: githubUrl ? githubUrl.trim() : '',
      liveUrl: liveUrl ? liveUrl.trim() : '',
      image: image ? image.trim() : '',
      featured: Boolean(featured),
    })

    return res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project,
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      })
    }
    return next(error)
  }
}

/**
 * @desc    Update a project by ID
 * @route   PUT /api/projects/:id
 * @access  Public / Dev
 */
export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Project ID format',
      })
    }

    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project,
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      })
    }
    return next(error)
  }
}

/**
 * @desc    Delete a project by ID
 * @route   DELETE /api/projects/:id
 * @access  Public / Dev
 */
export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Project ID format',
      })
    }

    const project = await Project.findByIdAndDelete(id)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
    })
  } catch (error) {
    return next(error)
  }
}
