import React from "react"
import contentStyles from "./content.module.css"

export default ({ children, styleClass }) => (
  <div className={contentStyles[`${styleClass}`]}>{children}</div>
)
