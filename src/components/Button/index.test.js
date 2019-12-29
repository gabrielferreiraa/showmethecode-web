import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Button from "./index"

describe("<Button />", () => {
  test("should render", () => {
    const text = "Click here!"
    const { getByText } = render(<Button onClick={() => {}}>{text}</Button>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
