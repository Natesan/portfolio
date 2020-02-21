import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import favicon from "../images/favicon.ico"

const linkStyle = {
  textDecoration: `none`,
}

const ListLink = props => (
  <li className="nav-item px-3 py-1">
    <Link style={linkStyle} to={props.to}>
      {props.children}
    </Link>
  </li>
)

var oPageMetadata = {
  title: "Natesan Sivagnanam",
  href: "https://natesan.netlify.com/",
}

export default ({ pageTitle, children, showCredits }) => (
  <div
    style={{
      padding: `0 1rem`,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Natesan's portfolio built on Gatsby"
      ></meta>
      <title>{pageTitle}</title>
      <link rel="canonical" href={oPageMetadata.href} />
      <link rel="icon" type="image/x-icon" href={favicon} />
      {/* <link rel="shortcut icon" type="image/x-icon" href={favicon} /> */}
    </Helmet>
    <PageTransition
      defaultStyle={{
        transition: `opacity 900ms cubic-bezier(0.42,0,0.58,1)`,
        opacity: 0,
      }}
      transitionStyles={{
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      }}
    >
      <header className="mb-3">
        <ul className="d-flex justify-content-center nav">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/experience">Experience</ListLink>
          <ListLink to="/skills">Skills</ListLink>
          <ListLink to="/journals">Journals</ListLink>
          <ListLink to="/books/">Books</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <section className="container">{children}</section>
      {showCredits ? (
        <footer className="container text-center blockquote-footer fixed-bottom mb-3">
          Built using Gatsby and Netlify
        </footer>
      ) : null}
    </PageTransition>
  </div>
)
