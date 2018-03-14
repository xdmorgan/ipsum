import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import "jest-styled-components";

import * as generator from "../generator";
generator.generate = () => "Randomly generated String";

it("renders without crashing", () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
