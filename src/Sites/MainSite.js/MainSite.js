import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function MainSite() {
  let history = useHistory();

  function goToUpload() {
    history.push("/UploadRecording");
  }
  function goToRecord() {
    history.push("/Record");
  }
  function goToContact() {
    history.push("/Contact");
  }
  return (
    <div>
      <Sites>
        <Upload>
          <Button onClick={goToUpload}>Upload recording</Button>
        </Upload>
        <Record>
          <Button onClick={goToRecord}>Record</Button>
        </Record>
        <Contact>
          <Button onClick={goToContact}>Contact</Button>
        </Contact>
      </Sites>
    </div>
  );
}

export default MainSite;

const Sites = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Upload = styled.div`
  background: rgb(237, 237, 238) obrazek center no-repeat;
`;

const Record = styled.div`
  /* width: 40rem;
    height: 40rem; */
  background: rgb(237, 237, 238) url() center no-repeat;
`;

const Contact = styled.div`
  background: rgb(237, 237, 238) obrazek center no-repeat;
`;

const Button = styled.div`
  padding: 1.5rem;
  width: 18rem;
  text-align: center;
  font-size: 1.8rem;
  background-color: rgb(62, 90, 91);
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(197, 170, 160);
    color: black;
    transition: 0.4s;
  }
`;
