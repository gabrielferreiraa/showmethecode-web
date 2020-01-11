import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Google from "./Google"

describe("<Google />", () => {
  test("should render", () => {
    const text = "Login with Google"
    const { getByText } = render(<Google onClick={() => {}}>{text}</Google>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
