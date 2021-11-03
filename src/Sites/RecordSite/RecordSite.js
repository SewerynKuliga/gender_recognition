import React from 'react';
import styled from 'styled-components';


function RecordSite() {
    return (
        <div>
            <Title>Record</Title>
            <p>Record an audio file no shorter than 2s and not longer than 4s in wav format</p>
            <div></div>
        </div>
    )
}

export default RecordSite;

const Title = styled.h1`
  font-size: 5rem;
  color: rgba(18,49,50);
  text-align: center;
  margin: 10rem 0rem;
`