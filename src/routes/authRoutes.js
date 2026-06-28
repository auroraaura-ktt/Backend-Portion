import { Router } from 'express'

import { loginUser, registerUser, resendVerificationCode, verifyUser } from '../controllers/authController.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Auth API endpoints',
    register: '/api/auth/register (POST)',
    login: '/api/auth/login (POST)',
    verify: '/api/auth/verify (POST)',
    resendVerificationCode: '/api/auth/verify/resend (POST)',
  })
})

router.get('/register', (req, res) => {
  res.json({
    message: 'Use POST /api/auth/register to create a new account',
    requiredFields: ['username', 'email', 'password'],
  })
})

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/verify', verifyUser)
router.post('/verify/resend', resendVerificationCode)

export default router