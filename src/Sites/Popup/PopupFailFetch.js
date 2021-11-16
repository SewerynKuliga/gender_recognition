import React from "react";
import styled from "styled-components";

function PopupFailFetch(props) {
  return props.trigger ? (
    <Body>
      <Message>
        <Info> {props.errorMessage}</Info>
        <Button
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          X
        </Button>
      </Message>
    </Body>
  ) : (
    ""
  );
}

export default PopupFailFetch;

const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  position: relative;
  padding: 5rem;
  width: initial;
  background-color: #fff;
  border-radius: 5rem;
  border: 5px solid red;
`;
const Info = styled.h1`
  font-size: 3rem;
  padding: 2rem 5rem;
  line-height: 4rem;
  font-weight: bold;
`;

const Button = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border-radius: 5px;

`;
