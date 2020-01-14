import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { expect } from "chai"

import http from "./http-client"

const mock = new MockAdapter(axios)

const baseURL = process.env.REACT_APP_API_HOST

describe("services/http-client", () => {
  test("should be a function", () => {
    expect(http).to.be.a("function")
  })

  test("should return correct data", async () => {
    const responseData = { users: [1, 2, 3] }
    mock.onGet(`${baseURL}/get-user`).reply(200, responseData)

    const response = await http({
      method: "GET",
      url: "/get-user",
      token: "TOKEN",
    })

    expect(response.data).to.be.deep.equal(responseData)
  })

  test("should return status different 200", async () => {
    try {
      mock.onPost(`${baseURL}/save-user`).reply(500)

      await http({
        method: "POST",
        url: "/save-user",
        token: "TOKEN",
      })
    } catch (err) {
      expect(err.message).to.be.deep.equal(
        "Request failed with status code 500"
      )
    }
  })
})
