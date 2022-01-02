import * as React from "react"

import Header from "./Header"
import { GlobalStyle } from "./GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
