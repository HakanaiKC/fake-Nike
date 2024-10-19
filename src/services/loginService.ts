import axiosInstance from "../config/axiosClient"

const login = async (email: string, password: string) => {
    const res = await axiosInstance.post('auth/login',
        {
            username: email,
            password: password
        })
    return res.data
}

export default { login }