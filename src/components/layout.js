import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const linkStyle = {
  textDecoration: `none`,
}

const ListLink = props => (
  <li className="nav-item px-2 py-1">
    <Link style={linkStyle} to={props.to}>
      {props.children}
    </Link>
  </li>
)

var oPageMetadata = {
  title: "Natesan Sivagnanam",
  href: "https://natesan.netlify.com/",
}

export default ({ pageTitle, children }) => (
  <div
    style={{
      margin: `3rem auto`,
      maxWidth: 600,
      padding: `0 1rem`,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <link rel="canonical" href={oPageMetadata.href} />
    </Helmet>
    <header className="container mb-3">
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
