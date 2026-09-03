import express from 'express'
import { createContact, getContacts } from '../controllers/contactController.js'

const router = express.Router()

// POST /api/contact -> Send a new contact message
// GET /api/contact  -> View contact messages (dev/admin)
router.route('/')
  .post(createContact)
  .get(getContacts)

export default router
