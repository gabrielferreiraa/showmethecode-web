import axios from "axios";

const baseURL = process.env.REACT_APP_API_HOST;

export default ({ method, url, ...options }) =>
    axios({
        headers: {
            Accept: "application/json",
            Authorization: options.token
        },
        method,
        url: `${baseURL}${url}`,
        ...options
    });
