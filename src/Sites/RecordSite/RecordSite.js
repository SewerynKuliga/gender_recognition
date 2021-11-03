import React from "react";
import styled from "styled-components";

function RecordSite() {
  return (
    <div>
      <Title>Record</Title>
      <Subtitle>
        Record an audio file no shorter than 2s and not longer than 4s in wav
        format
      </Subtitle>
      <Button>Record</Button>
    </div>
  );
}

export default RecordSite;

const Title = styled.h1`
  font-size: 5rem;
  color: rgba(18, 49, 50);
  text-align: center;
  margin: 10rem 0rem 4rem 0rem;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: rgba(18, 49, 50);
  text-align: center;
  margin-bottom: 6rem;
`;

const Button = styled.div`
  width: 18rem;
  height: auto;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  background-color: rgb(62, 90, 91);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    color: rgb(197, 170, 160);
    transition: 0.4s;
  }
`;
