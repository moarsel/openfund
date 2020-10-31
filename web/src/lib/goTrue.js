import GoTrue from 'gotrue-js'

export const goTrueClient = new GoTrue({
  APIUrl: process.env.AUTH_API_URL,
  setCookie: true,
})
