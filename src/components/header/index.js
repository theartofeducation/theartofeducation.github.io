import { Link } from "gatsby"
import React from "react"
import { Svg } from "../svgs"
import { Container } from "../container"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Link to="/">
        <Svg className="aoeu-logo" symbolId="aoeu-logo" />
        <h1>Software Engineering</h1>
      </Link>
    </Container>
  </header>
)

export default Header
