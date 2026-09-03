import mongoose from 'mongoose'
import Contact from '../models/Contact.js'

/**
 * @desc    Submit a new contact form message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res, next) => {
  try {
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database is not connected. Please ensure MongoDB is running and MONGO_URI in .env is valid.',
      })
    }

    const { name, email, subject, message } = req.body

    // Basic validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      })
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required.',
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required.',
      })
    }

    if (message.trim().length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot exceed 2000 characters.',
      })
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : '',
      message: message.trim(),
    })

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
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
 * @desc    Get all contact messages (for dev/admin reference)
 * @route   GET /api/contact
 * @access  Private / Development
 */
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (error) {
    return next(error)
  }
}
