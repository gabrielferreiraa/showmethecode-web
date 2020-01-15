import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import global from "config/global"
import Logo from "./Logo"

describe("<Logo />", () => {
  test("should render", () => {
    const { getByAltText } = render(<Logo />)

    expect(getByAltText(global.appName)).toBeInTheDocument()
  })
})
