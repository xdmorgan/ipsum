import React from "react";
import styled from "styled-components/primitives";
import { AppView, ContainerView } from "./styled";

const StyledText = styled.Text`
  color: blue;
`;

class AppLayout extends React.Component {
  render() {
    return (
      <AppView>
        <StyledText>PersistentHeader</StyledText>
        {this.props.children}
      </AppView>
    );
  }
}

export { AppLayout, ContainerView };
