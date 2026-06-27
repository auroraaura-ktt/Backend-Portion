import cors from 'cors'
import express from 'express'

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

// ✅ CORS (safe for production - change Vercel URL later)
app.use(
  cors({
    origin: "https://miitverse8.vercel.app",
    credentials: true
  })
)

app.use(express.json())

// ✅ Health check (Render uses this often)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// ✅ Root route
app.get('/', (req, res) => {
  res.json({
    message: 'MiitVerse API running',
    health: '/api/health'
  })
})

// ✅ API base route
app.get('/api', (req, res) => {
  res.json({
    message: 'MiitVerse API running',
    health: '/api/health',
    auth: '/api/auth',
    users: '/api/users'
  })
})

// ✅ Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

export default app