import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  textDecoration: `none`,
}

const ListLink = props => (
  <li className="nav-item">
    <Link style={linkStyle} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      width: 1000,
      margin: `3rem auto`,
      maxWidth: 600,
      padding: `0 1rem`,
    }}
  >
    <header className="container mb-4">
      <ul className="d-flex justify-content-around nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/experience">Experience</ListLink>
        <ListLink to="/skills">Skills</ListLink>
        <ListLink to="/journals">Journals</ListLink>
        <ListLink to="/books/">Books</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <section className="container">{children}</section>
    <footer className="container"></footer>
  </div>
)
