import React from "react"
import { useDispatch } from "react-redux"

import { loginRequest } from "redux-flow/reducers/auth/actions"
import { PROVIDERS } from "redux-flow/reducers/auth/constants"
import { Text, Icon } from "components"
import Github from "./Github"
import Google from "./Google"
import Wrapper from "./Wrapper"

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <Text align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        orci purus. Aenean ut turpis urna. Proin at sapien quis nibh gravida
        rutrum. Integer aliquet leo imperdiet, venenatis nibh et, laoreet magna.
        Praesent justo velit, vulputate ut diam sit amet, volutpat feugiat
        sapien. Proin eget mollis arcu. Curabitur fermentum finibus ultrices.
      </Text>
      <Wrapper>
        <Github onClick={() => dispatch(loginRequest(PROVIDERS.github))}>
          <Icon icon="Github" isLogo />
          Login with Github
        </Github>
        <Google onClick={() => dispatch(loginRequest(PROVIDERS.google))}>
          <Icon icon="Google" isLogo />
          Login with Google
        </Google>
      </Wrapper>
    </div>
  )
}
