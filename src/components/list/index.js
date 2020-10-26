import React from "react"
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

export const ListItem = ({ children, className }) => (
  <li className={ clsx(["list-item", className])}>
    {children}
  </li>
)
