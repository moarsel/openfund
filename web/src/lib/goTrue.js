import GoTrue from 'gotrue-js'

export const goTrueClient = new GoTrue({
  APIUrl: 'https://silly-hypatia-fa017a.netlify.app/.netlify/identity',
  setCookie: true,
})
