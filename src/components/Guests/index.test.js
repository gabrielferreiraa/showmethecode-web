import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Guests from "."

describe("<Guests />", () => {
  test("should render", () => {
    const data = [
      {
        _id: "1",
        name: "Gabriel Ferreira",
        email: " gabriel@email.com",
        avatar: "http://showmethecode.com.br/photo.png",
        firebase: {},
      },
      {
        _id: "2",
        name: "Silvio Santos",
        email: " silvio@email.com",
        avatar: "http://sbt.com.br/photo.png",
        firebase: {},
      },
    ]

    const { getByAltText } = render(<Guests data={data} />)

    data.map(guest => expect(getByAltText(guest.name)).toBeInTheDocument())
  })
})
