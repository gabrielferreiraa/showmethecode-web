import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Github from "./Github"

describe("<Github />", () => {
  test("should render", () => {
    const text = "Login with Github"
    const { getByText } = render(<Github onClick={() => {}}>{text}</Github>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
