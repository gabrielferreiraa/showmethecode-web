import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Title from "./index"

describe("<Title />", () => {
  test("should render", () => {
    const text = "Lorem Ipsum"
    const { getByText } = render(<Title>{text}</Title>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
