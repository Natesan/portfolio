import React from "react"
import renderer from "react-test-renderer"

import Container from "../container"

describe("Container", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Container>
          <div id="test"></div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
