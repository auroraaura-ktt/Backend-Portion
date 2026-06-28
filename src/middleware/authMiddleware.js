import jwt from 'jsonwebtoken'

import { env } from '../config/env.js'

function extractToken(req) {
  const authorization = req.headers.authorization || ''
  return authorization.startsWith('Bearer ')
    ? authorization.slice(7)
    : authorization
}

export function authMiddleware(req, res, next) {
  const token = extractToken(req)

  if (!token) {
    return res.status(401).json({ message: 'Missing token' })
  }

  try {
    req.user = jwt.verify(token, env.jwtSecret)
    return next()
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}

export function optionalAuthMiddleware(req, res, next) {
  const token = extractToken(req)

  if (!token) {
    req.user = null
    return next()
  }

  try {
    req.user = jwt.verify(token, env.jwtSecret)
    return next()
  } catch {
    req.user = null
    return next()
  }
}