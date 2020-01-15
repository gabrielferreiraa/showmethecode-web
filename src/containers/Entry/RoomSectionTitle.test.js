import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { render } from "@testing-library/react"

import RoomSectionTitle from "./RoomSectionTitle"

describe("<RoomSectionTitle />", () => {
  test("should render title", () => {
    const { getByText } = render(
      <RoomSectionTitle title="title" tooltip="tooltip" />
    )

    expect(getByText("title")).toBeInTheDocument()
  })
})
