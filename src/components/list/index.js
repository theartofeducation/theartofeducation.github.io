import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import "./list.scss"

export const List = ({
  children,
  className,
  orientation = "left"
}) => (
  <ul className={ clsx(["list", orientation, className])}>
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string,
  orientation: PropTypes.string
}

export const ListItem = ({ children, className }) => (
  <li className={ clsx(["list-item", className])}>
    {children}
  </li>
)

ListItem.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string
}
