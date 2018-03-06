import React, { Component } from "react";
import styled from "styled-components/primitives";
import logo from "./logo.svg";

const AppView = styled.View`
  display: flex;
  align-items: center;
`;
const HeaderView = styled.View`
  background-color: #222;
  height: 150px;
  padding: 20px;
`;

const LogoImage = styled.Image`
  height: 80px;
`;

const IntroHeading = styled.Text`
  font-size: 1.5em;
  color: #fff;
`;

const IntroParagraph = styled.Text`
  font-size: large;
`;

class App extends Component {
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
        <IntroParagraph>
          To get started, edit <code>src/App.js</code> and save to reload.
        </IntroParagraph>
      </AppView>
    );
  }
}

export default App;
