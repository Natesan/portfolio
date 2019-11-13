import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: `teal` }}>
    <Layout>
      <Header headerText="Journals" />
      <p>Send us a message!</p>
    </Layout>
  </div>
)
