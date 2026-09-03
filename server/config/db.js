import mongoose from 'mongoose'

/**
 * Connect to MongoDB using Mongoose
 * The connection URI is retrieved from the MONGO_URI environment variable.
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio'
    const conn = await mongoose.connect(mongoURI)

    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`)
    console.log(`[MongoDB] Database name: ${conn.connection.name}`)
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`)
    console.error('Please make sure MongoDB is running locally or check your MONGO_URI in .env')
    // We do not crash the process in development so frontend can still run smoothly
  }
}

export default connectDB
