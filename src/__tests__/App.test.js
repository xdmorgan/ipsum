import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import "jest-styled-components";

it("renders without crashing", () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
