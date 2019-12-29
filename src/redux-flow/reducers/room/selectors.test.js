import { expect } from "chai"

import { getAllMyRooms } from "./selectors"
import { USER_TYPE } from "./constants"

const state = {
  user: {
    data: {
      _id: "5d868d0b532cb2ed8c566401",
    },
  },
  room: {
    myRooms: [
      {
        users: [
          {
            _id: "5d87ddd1532cb2ed8c68843a",
            email: "sbt@gmail.com",
            avatar: "https://sbt.com.br/photo.png",
            name: "Silvio Santos",
          },
        ],
        _id: "5d868f690098dc560bfef866",
        owner: {
          _id: "5d868d0b532cb2ed8c566401",
          email: "hi@gabrielferreira.dev",
          avatar: "https://avatars3.githubusercontent.com/u/17201177?v=4",
          name: "Gabriel Ferreira ",
        },
        code: "6107",
        createdAt: "2019-09-21T21:00:25.528Z",
      },
    ],
  },
}

describe("selectors/room", () => {
  describe("getAllMyRooms", () => {
    test("should be a function", () => {
      expect(getAllMyRooms).to.be.a("function")
    })

    test("should be return object", () => {
      expect(getAllMyRooms(state)).to.be.an("array")
    })

    test("should be return correct object", () => {
      expect(getAllMyRooms(state)).to.be.deep.equal([
        {
          userType: USER_TYPE.owner,
          users: [
            {
              _id: "5d87ddd1532cb2ed8c68843a",
              email: "sbt@gmail.com",
              avatar: "https://sbt.com.br/photo.png",
              name: "Silvio Santos",
            },
          ],
          owner: {
            _id: "5d868d0b532cb2ed8c566401",
            email: "hi@gabrielferreira.dev",
            avatar: "https://avatars3.githubusercontent.com/u/17201177?v=4",
            name: "Gabriel Ferreira ",
          },
          code: "6107",
          createdAt: "2019-09-21T21:00:25.528Z",
        },
      ])
    })
  })
})
