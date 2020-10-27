import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
