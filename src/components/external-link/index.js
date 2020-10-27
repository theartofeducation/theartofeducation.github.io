import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

export const ExternalLink = ({ url, children, className }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className={clsx(["external-link", className])}>
    {children}
  </a>
)

ExternalLink.propTypes = {
  url: PropTypes.url.isRequired,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string
}
