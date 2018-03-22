import React from "react";
import styled from "styled-components/primitives";
import { ContainerView } from "./styled";

const AppView = styled.View`
  display: flex;
  align-items: center;
  background-color: hsla(219, 100%, 99%, 1);
`;

const HeaderView = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: hsla(187, 100%, 6%, 1);
  padding: 10px 0;
`;

const HeaderText = styled.Text`
  color: white;
`;

export default class AppLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <AppView>
        <HeaderView>
          <ContainerView>
            <HeaderText>Some text, innit</HeaderText>
          </ContainerView>
        </HeaderView>
        {children}
      </AppView>
    );
  }
}
