import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import "./card.scss"

export const Card = ({ children, className }) => (
  <div className={ clsx(["card", className])}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string
}
