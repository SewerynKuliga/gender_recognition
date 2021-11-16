import React from "react";
import styled from "styled-components";

function Popup(props) {
  return props.trigger ? (
    <Body>
      <Message>
        <Info>
          You are a <span>{props.gender}</span> <br />
          Probability: <span>{props.probablility.toFixed(2).slice(2)}%</span>
        </Info>
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

export default Popup;

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
  border-radius: 3rem;
  border: 5px solid green;
`;
const Info = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  padding: 2rem 5rem;
  span {
    font-weight: bold;
    color: green;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border-radius: 5px;

`;
