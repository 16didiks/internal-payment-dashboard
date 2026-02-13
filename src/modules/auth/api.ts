interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

/**
 * Mock login API
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payload.email === 'admin@mail.com' && payload.password === '123456') {
        resolve({ token: 'mock-jwt-token-123' })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 800)
  })
}
