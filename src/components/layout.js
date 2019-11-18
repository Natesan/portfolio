import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      width: 1100,
      margin: `3rem auto`,
      maxWidth: 650,
      padding: `0 1rem`,
    }}
  >
    <header>
      <ul
        style={{ listStyle: `none` }}
        className="d-flex justify-content-around"
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/experience">Experience</ListLink>
        <ListLink to="/skills">Skills</ListLink>
        <ListLink to="/journals">Journals</ListLink>
        <ListLink to="/books/">Books</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <section className="container">{children}</section>
    <footer></footer>
  </div>
)
