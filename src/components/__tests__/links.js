import React from "react"
import renderer from "react-test-renderer"

import Links from "../links"

const oPageMetadata = {
  homePageLinks: [
    { type: "LINKEDIN", url: "https://www.linkedin.com/in/natesansivagnanam" },
    { type: "GITHUB", url: "https://github.com/Natesan" },
    { type: "TWITTER", url: "https://www.twitter.com/NatesanSiv" },
    { type: "INSTAGRAM", url: "https://www.instagram.com/natesan.sivagnanam" },
    { type: "FACEBOOK", url: "https://www.facebook.com/Natesan.Sivagnanam" },
    {
      type: "MAIL",
      url: "mailto:nmsnatesan@gmail.com?Subject=Ahoy%20Hoy",
      fontSize: "40px",
      styleClass: "contactLink",
    },
    {
      type: "PHONE",
      url: "tel:+919742398411",
      fontSize: "40px",
      styleClass: "contactLink",
    },
  ],
}

describe("Links", () => {
  it("render correctly", () => {
    const tree = renderer
      .create(<Links links={oPageMetadata.homePageLinks}></Links>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
