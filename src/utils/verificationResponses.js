export function buildVerificationPendingResponse(email, message = 'Verification code sent. Please check your email and confirm within 15 minutes to create your account.') {
  return {
    success: true,
    status: 'verification_pending',
    verificationSent: true,
    requiresVerification: true,
    expiresInMinutes: 15,
    message,
    email,
  }
}

export function buildVerificationResentResponse(email, message = 'Verification code resent. Please check your email.') {
  return {
    success: true,
    status: 'verification_resent',
    verificationSent: true,
    requiresVerification: true,
    expiresInMinutes: 15,
    message,
    email,
  }
}

export function buildVerificationErrorResponse(message, error = null) {
  return {
    success: false,
    status: 'verification_failed',
    verificationSent: false,
    requiresVerification: true,
    message,
    ...(error ? { error } : {}),
  }
}
