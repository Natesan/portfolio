import React from "react"

const ThemeToggler = props => {
  return (
    <div
      className={
        props.styleClass ? props.styleClass + " theme-toggle" : "theme-toggle"
      }
      aria-label="Toggle Theme"
    >
      <button
        type="button"
        onClick={props.toggleTheme}
        className={props.buttonStyleClass}
      >
        {props.content}
      </button>
    </div>
  )
}

export default ThemeToggler
