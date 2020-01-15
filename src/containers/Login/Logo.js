import React from "react"
import styled from "styled-components"
import global from "config/global"

const Image = styled.img`
  width: 600px;
  display: block;
  margin: 0 auto;
`

export default function Logo() {
  return (
    <Image
      src="images/show-me-the-code.png"
      alt={global.appName}
      title={global.appName}
    />
  )
}
