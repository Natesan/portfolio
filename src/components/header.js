import React from "react"
export default props => (
  <h3 className="text-center mb-3" data-cy={props.headerText}>
    {props.headerText}
  </h3>
)
