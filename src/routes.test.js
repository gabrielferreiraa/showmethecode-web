import React from "react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import configureStore from "redux-mock-store"
import { render } from "@testing-library/react"
import Routes from "./routes"

const mockStore = configureStore([])

const renderContainer = (store, history) => {
  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )

  return container
}

const mock = {
  user: {
    data: {
      name: "Gabriel",
      email: "hi@gabrielferreira.dev",
      avatar: "https://picture.com.br",
    },
  },
}

describe("src/routes", () => {
  let history
  beforeEach(() => {
    history = createMemoryHistory()
  })

  test("<Login /> rendering", () => {
    const store = mockStore({
      user: { data: false },
    })
    const container = renderContainer(store, history)

    expect(container.innerHTML).toMatch(/Login with Github/)
    expect(container.innerHTML).toMatch(/Login with Google/)
  })

  test("<Entry /> rendering", () => {
    const store = mockStore({
      room: { myRooms: [] },
      user: mock.user,
    })

    const container = renderContainer(store, history)
    history.push("/entry")

    expect(container.innerHTML).toMatch(/Hi,Gabriel/)
  })

  test("<Code /> rendering", () => {
    const store = mockStore({
      user: mock.user,
    })

    const container = renderContainer(store, history)
    history.push("/code")

    expect(container.innerHTML).toMatch(/code/)
  })
})
