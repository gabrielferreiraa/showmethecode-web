import React from "react"
import { useDispatch } from "react-redux"

import { loginRequest } from "redux-flow/reducers/auth/actions"
import { PROVIDERS } from "redux-flow/reducers/auth/constants"
import { Text, Icon } from "components"
import Github from "./Github"
import Google from "./Google"
import Wrapper from "./Wrapper"
import Logo from "./Logo"

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <Logo />
      <Text align="center">
        Real-time code sharing with private rooms to make your life and your
        friends easier. Talking is cheap, show me the code!
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
