// @flow

import React, { Component } from "react";
import styled from "styled-components/primitives";
import { NUFC } from "./generator/data";
import { GeneratedText } from "./generator";
import { AppLayout, ContainerView } from "./global";

const IntroHeading = styled.Text`
  font-weight: 700;
  font-size: 32px;
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
      <AppLayout>
        <ContainerView>
          <IntroHeading>Lorem Ipsum Generator</IntroHeading>
          <GeneratedText data={this.state.data} length={this.state.length} />
        </ContainerView>
      </AppLayout>
    );
  }
}

export default App;
