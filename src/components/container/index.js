import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import "./container.scss"

export const Container = ({
  children,
  className
}) => (
  <div className={ clsx(["container", className])}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string
}
