import axios from "axios"

const baseURL = process.env.REACT_APP_API_HOST

export default ({ method, url, ...options }) => {
  try {
    return axios({
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
      method,
      url: `${baseURL}${url}`,
      ...options,
    })
  } catch (err) {
    throw new Error(err)
  }
}
