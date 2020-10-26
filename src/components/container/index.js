import React from "react"
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
