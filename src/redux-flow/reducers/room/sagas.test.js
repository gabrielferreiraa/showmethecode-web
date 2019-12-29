import { select } from "redux-saga/effects"
import { expectSaga } from "redux-saga-test-plan"
import * as matchers from "redux-saga-test-plan/matchers"
import { throwError } from "redux-saga-test-plan/providers"

import { getUser } from "redux-flow/reducers/user/selectors"

import roomSagas, { workerFetchMyRoomsRequest } from "./sagas"
import * as actions from "./actions"
import { myRooms } from "../../../services/api"

const userMock = {
  _id: "5d868d0b532cb2ed8c566401",
}

const myRoomsMock = {
  data: [
    {
      users: [],
      _id: "5d868f028ce46e55d655e4c0",
      owner: {
        _id: "5d868d0b532cb2ed8c566401",
        email: "silvio@email.com",
        avatar: "https://sbt.com.br/photo.png",
        name: "Silvio Santos",
      },
      code: "8886",
    },
  ],
}

describe("sagas/room", () => {
  describe("workerFetchMyRoomsRequest", () => {
    test("should fetch my rooms", async () => {
      await expectSaga(workerFetchMyRoomsRequest)
        .provide([
          [matchers.call.fn(myRooms), myRoomsMock],
          [select(getUser), userMock],
        ])
        .put(actions.fetchMyRoomsSuccess(myRoomsMock.data))
        .dispatch(actions.fetchMyRoomsRequest())
        .run()
    })

    test("handles errors", async () => {
      const error = new Error("error")

      await expectSaga(workerFetchMyRoomsRequest)
        .provide([
          [matchers.call.fn(myRooms), throwError(error)],
          [select(getUser), userMock],
        ])
        .put(actions.fetchMyRoomsFailure(error))
        .dispatch(actions.fetchMyRoomsRequest())
        .run()
    })
  })

  describe("roomSagas", () => {
    test("should handle workerFetchMyRoomsRequest", async () => {
      await expectSaga(roomSagas)
        .provide([
          [matchers.call.fn(myRooms), myRoomsMock],
          [select(getUser), userMock],
        ])
        .put(actions.fetchMyRoomsSuccess(myRoomsMock.data))
        .dispatch(actions.fetchMyRoomsRequest())
        .run()
    })
  })
})
