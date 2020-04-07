import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import favicon from "../images/favicon.ico"
import logo from "../images/logo.svg"
// import useDarkMode from "use-dark-mode"

const linkStyle = {
  textDecoration: `none`,
}

const ListLink = props => (
  <li className="nav-item px-3 py-1 mt-3 md:mt-1 lg:mt-2 bg-gray-100 border-b border-blue-500 text-gray-700 font-bold text-lg">
    <Link style={linkStyle} to={props.to}>
      {props.children}
    </Link>
  </li>
)

var oPageMetadata = {
  title: "Natesan Sivagnanam",
  href: "https://natesan.netlify.com/",
}

export default ({ pageTitle, children, showCredits }) => {
  // const darkMode = useDarkMode(false)

  return (
    <div className="layout p-3 font-sans">
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
        <header className="text-center lg:w-9/12 mx-auto">
          <nav className="mt-12 mb-2 md:my-2 lg:my-2 mx-auto">
            <ul className="flex flex-wrap justify-evenly ">
              <li>
                <a
                  className="lg:absolute lg:left-2 lg:top-1.5 absolute left-center md:left-2 lg:left-2 top-1"
                  href="/"
                >
                  <img src={logo} alt="Logo" className="w-12 h-12"></img>
                </a>
              </li>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/work">Work</ListLink>
              <ListLink to="/journals">Journals</ListLink>
              <ListLink to="/books/">Books</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
              {/* <li>
                <div
                  class="inline-flex theme-toggle absolute right-2 top-1"
                  role="group"
                  aria-label="Toggle Theme"
                >
                  <button
                    type="button"
                    onClick={darkMode.disable}
                    class="text-sm h-8 w-12 bg-white text-gray-800 hover:bg-gray-100 hover:text-white-800 font-semibold py-1 px-2 border border-gray-400 rounded-md shadow"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={darkMode.enable}
                    class="text-sm h-8 w-12 bg-gray-800 text-white hover:bg-gray-100 hover:text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded-md shadow"
                  >
                    Dark
                  </button>
                </div>
              </li> */}
            </ul>
          </nav>
        </header>
        <section className="container section mx-auto lg:mt-5">
          {children}
        </section>
        {showCredits ? (
          <footer className="container text-center blockquote-footer mb-3">
            Built using Gatsby and Netlify
          </footer>
        ) : null}
      </PageTransition>
    </div>
  )
}
