import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import projectRoutes from './routes/projectRoutes.js'

// Load environment variables from .env file
dotenv.config()

// Connect to MongoDB Database
connectDB()

const app = express()

// Middleware
// Enable CORS for frontend communication during development
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))

// Parse incoming JSON request bodies
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio Backend API is running successfully',
    timestamp: new Date().toISOString(),
  })
})

// Register API Routes
app.use('/api/contact', contactRoutes)
app.use('/api/projects', projectRoutes)

// 404 Route Handler for undefined endpoints
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
  })
})

// Global Error Handling Middleware
app.use((err, req, res, _next) => {
  console.error('[Server Error]:', err.stack || err.message)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`=============================================`)
  console.log(`🚀 Portfolio API Server running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`)
  console.log(`✉️  Contact API:  http://localhost:${PORT}/api/contact`)
  console.log(`📁 Project API:  http://localhost:${PORT}/api/projects`)
  console.log(`=============================================`)
})
