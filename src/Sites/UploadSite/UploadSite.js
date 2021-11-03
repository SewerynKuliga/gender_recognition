import React, { useState } from "react";
import styled from "styled-components";

function UploadSite() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("audioFile", selectedFile);

    fetch("https://enigmatic-badlands-41342.herokuapp.com/v1.0/recognition", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Title>Upload Recordnig</Title>
      <Subtitle>
        Upload an audio file no shorter than 2s and not longer than 4s in wav
        format
      </Subtitle>
      <FilePlace>
        <input
          type="file"
          id="file"
          onChange={changeHandler}
          style={{ display: "none" }}
        />
        <Button htmlFor="file">Choose a file</Button>

        {isFilePicked ? (
          <FileData>
            <p>
              <strong>Filename:</strong> {selectedFile.name}
            </p>
            <p>
              <strong>Filetype:</strong> {selectedFile.type}
            </p>

            <Submit onClick={handleSubmission}>Submit</Submit>
          </FileData>
        ) : (
          <FileData>
            <p>Select a file to show details</p>
          </FileData>
        )}
      </FilePlace>

      {/* <DataFetching /> */}
    </div>
  );
}

export default UploadSite;

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

const FilePlace = styled.section`
  width: auto;
  height: auto;
  text-align: center;
`;
const Button = styled.label`
  width: 18rem;
  height: auto;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  background-color: rgb(62, 90, 91);
  color: white;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 3rem;
  &:hover {
    color: rgb(197, 170, 160);
    transition: 0.4s;
  }
`;

const FileData = styled.div`
  position: relative;
  margin: 3rem auto;
  p {
    font-size: 1.8rem;
  }
`;

const Submit = styled.div`
  width: 15rem;
  height: auto;
  position: relative;
  background-color: red;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  margin: 2rem auto;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    width: 17rem;
    height: auto + 2rem;
    transition: 0.3s;
  }
`;
