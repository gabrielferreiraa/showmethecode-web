import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"
import Text from "./index"

describe("<Text />", () => {
  test("should render", () => {
    const text = "Lorem Ipsum"
    const { getByText } = render(<Text>{text}</Text>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
