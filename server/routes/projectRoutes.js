import express from 'express'
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'

const router = express.Router()

// GET  /api/projects     -> Get all projects
// POST /api/projects     -> Create a new project
router.route('/')
  .get(getProjects)
  .post(createProject)

// GET    /api/projects/:id -> Get a single project
// PUT    /api/projects/:id -> Update a project
// DELETE /api/projects/:id -> Delete a project
router.route('/:id')
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject)

export default router
