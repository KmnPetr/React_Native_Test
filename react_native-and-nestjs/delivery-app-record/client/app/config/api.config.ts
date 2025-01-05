//export const SERVER_URL = process.env.SERVER_URL
export const SERVER_URL = 'http://192.168.231.182:4200'
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getCategoriesUrl = (string: string) => `/categories${string}`
export const getPaymentUrl = (string: string) => `/payment${string}`
export const getOrdersUrl = (string: string) => `/orders${string}`