import React from "react"

export default ({ children, className }) => (
  <div className={className ? "content " + className : "content"}>
    {children}
  </div>
)
