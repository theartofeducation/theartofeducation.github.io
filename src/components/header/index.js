import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AOEULogo } from "@aoeu/logos"
import { Container } from "../container"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Link to="/">
        <AOEULogo variant="horizontal" size="xl" className="aoeu-logo" />
        <h1>Software Engineering</h1>
      </Link>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
