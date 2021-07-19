export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:5001' : ''
export const domain = 'wanderse.us.auth0.com'
export const audience = 'http://blog-server.com/'
export const clientId = '60f5ed5429eeb900417c3b91'
