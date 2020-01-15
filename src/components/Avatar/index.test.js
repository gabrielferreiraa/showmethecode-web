import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Avatar from "."

describe("<Avatar />", () => {
  test("should render", () => {
    const { getByAltText } = render(
      <Avatar src="image-src" alt="Foto do Avatar" />
    )

    expect(getByAltText(/Foto do Avatar/)).toBeInTheDocument()
  })
})
