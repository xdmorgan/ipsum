import React from "react";
import styled from "styled-components/primitives";
import { generate } from "./";

const StyledTextView = styled.View`
  padding: 20px;
`;
const StyledText = styled.Text`
  color: #111;
`;

export default class GeneratedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: generate(props.data, props.length)
    };
  }
  render() {
    return (
      <StyledTextView>
        <StyledText>{this.state.content}</StyledText>
      </StyledTextView>
    );
  }
}
