import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import YourRooms from "./YourRooms"

describe("<YourRooms />", () => {
  test("should render", () => {
    const { getByText } = render(<YourRooms rooms={[]} />)

    expect(getByText("Your rooms")).toBeInTheDocument()
  })

  test("should render with rooms", () => {
    const rooms = [
      {
        code: "1234",
        owner: {
          name: "Silvio Santos",
          email: " silvio@email.com",
          avatar: "http://sbt.com.br/photo.png",
        },
      },
      {
        code: "1235",
        owner: {
          name: "Gabriel Ferreira",
          email: " gabriel@email.com",
          avatar: "http://showmethecode.com.br/photo.png",
        },
      },
    ]

    const { getByText } = render(
      <BrowserRouter>
        <YourRooms rooms={rooms} />
      </BrowserRouter>
    )

    rooms.map(room => expect(getByText(room.code)).toBeInTheDocument())
  })

  test("should render without rooms", () => {
    const { getByText } = render(<YourRooms rooms={[]} />)

    expect(
      getByText("You have not created and have not joined any rooms yet")
    ).toBeInTheDocument()
  })
})
