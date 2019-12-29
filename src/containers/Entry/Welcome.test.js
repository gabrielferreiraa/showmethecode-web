import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Welcome from "./Welcome"

describe("<Welcome />", () => {
  test("should render", () => {
    const text = "Lorem Ipsum"
    const { getByText } = render(<Welcome>{text}</Welcome>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
