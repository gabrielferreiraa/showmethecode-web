import React from "react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import configureStore from "redux-mock-store"
import { render } from "@testing-library/react"
import Routes from "./routes"

const mockStore = configureStore([])

describe("src/routes", () => {
  test("<Login /> rendering", () => {
    const store = mockStore({
      user: { data: false },
    })
    const history = createMemoryHistory()

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    )

    expect(container.innerHTML).toMatch(/Login with Github/)
    expect(container.innerHTML).toMatch(/Login with Google/)
  })

  test("<Entry /> rendering", () => {
    const store = mockStore({
      room: { myRooms: [] },
      user: {
        data: {
          name: "Gabriel",
          email: "hi@gabrielferreira.dev",
          avatar: "https://picture.com.br",
        },
      },
    })
    const history = createMemoryHistory()

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    )

    history.push("/entry")

    expect(container.innerHTML).toMatch(/Hi,Gabriel/)
  })

  test("<Code /> rendering", () => {
    const store = mockStore({
      user: {
        data: {
          name: "Gabriel",
          email: "hi@gabrielferreira.dev",
          avatar: "https://picture.com.br",
        },
      },
    })
    const history = createMemoryHistory()

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    )

    history.push("/code")

    expect(container.innerHTML).toMatch(/code/)
  })
})
