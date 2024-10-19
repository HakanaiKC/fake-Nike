const TOKEN_KEY = "token"
const isWindow = typeof window !== "undefined"

const removeToken = () => {
    isWindow && localStorage.removeItem(TOKEN_KEY!)
}

const getToken = () => {
   return isWindow && localStorage.getItem(TOKEN_KEY!) || null
}

const setToken = (token: string) => {
    isWindow && localStorage.setItem(TOKEN_KEY!, token)
}

const isLoggedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY!)
    return token
}

const AuthService = { removeToken, getToken, setToken, isLoggedIn }
export default AuthService