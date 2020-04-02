import React from "react"
export default props => (
  <h3 className="text-center my-3 text-2xl" data-cy={props.headerText}>
    {props.headerText}
  </h3>
)
