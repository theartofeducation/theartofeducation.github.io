import React from "react"
import clsx from "clsx"
import "./card.scss"

export const Card = ({ children, className, linkTo }) => (
  <div className={ clsx(["card", className])}>
    {children}
  </div>
)
