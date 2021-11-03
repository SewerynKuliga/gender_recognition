import React from 'react';
import styled from 'styled-components';


function UploadSite() {
    return (
        <div>
            <Title>Upload Recordnig</Title>
            <p>Upload an audio file no shorter than 2s and not longer than 4s in wav format</p>
            <div></div>
        </div>
    )
}

export default UploadSite;

const Title = styled.h1`
  font-size: 5rem;
  color: rgba(18,49,50);
  text-align: center;
  margin: 10rem 0rem;
`