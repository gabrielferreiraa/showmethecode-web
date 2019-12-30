import axios from "axios"

const baseURL = process.env.REACT_APP_API_HOST

export default ({ method, url, ...options }) => {
  const { token } = options

  if (!token) throw new Error("Token is required")

  try {
    return axios({
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
      method,
      url: `${baseURL}${url}`,
      ...options,
    })
  } catch (err) {
    throw new Error(err)
  }
}
