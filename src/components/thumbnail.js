import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "Natesan_Portfolio.jpeg" }) {
        id
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Natesan's Portfolio Image"
        className="img-fluid img-thumbnail mx-auto rounded px-1"
        width="75%"
      ></Img>
    </div>
  )
}
