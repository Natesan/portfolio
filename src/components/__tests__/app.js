import React from "react"
import renderer from "react-test-renderer"

import App from "../app"

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <App>
          <div id="test"></div>
        </App>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
