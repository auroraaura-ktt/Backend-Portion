import 'dotenv/config'
import { env } from './config/env.js'

// Force correct Render port if env.port is missing
if (!env.port) {
  env.port = process.env.PORT || 5000
}

console.log('Safe startup config loaded:')
console.log('PORT:', env.port)