// @flow

import React, { Component } from "react";
import styled from "styled-components/primitives";
import logo from "./logo.svg";
import { NUFC } from "./generator/data";
import { GeneratedText } from "./generator";

const AppView = styled.View`
  display: flex;
  align-items: center;
`;
const HeaderView = styled.View`
  background-color: #222;
  height: 150px;
  padding: 20px;
  align-self: stretch;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 80px;
  height: 80px;
`;

const IntroHeading = styled.Text`
  font-size: 1.5em;
  color: #fff;
`;

type State = {
  data: string[],
  length: number
};

class App extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      data: NUFC,
      length: 25
    };
  }
  render() {
    return (
      <AppView>
        <HeaderView>
          <LogoImage
            source={logo}
            style={{ resizeMode: "contain" }}
            alt="logo"
          />
          <IntroHeading>Welcome to React</IntroHeading>
        </HeaderView>
        <GeneratedText data={this.state.data} length={this.state.length} />
      </AppView>
    );
  }
}

export default App;
