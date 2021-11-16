import React, { useState, useEffect } from "react";
// import { AudioFile } from "../../Contexts/AudioFile";
import ReactPlayer from "react-player";

// import Napotem from "./Napotem";
// import styled from "styled-components";
// import useRecorder from "./useRecorder";
import { ReactMic } from "react-mic";

function RecordSite() {
  // const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [record, setRecord] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [sound, setSound] = useState(null);

  const startRecording = () => {
    setRecord(true);
    setTimeout(() => {
      setRecord(false);
    }, 3500);
  };

  // const stopRecording = () => {
  //   setRecord(false);
  // };

  function onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  function onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);

    const url = URL.createObjectURL(recordedBlob.blob);
    setSound(url);
    console.log(sound);
  }

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
      {/* <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button> */}

      {/* <Napotem /> */}
      <div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FFF"
          mimeType="audio/wav"
        />
        <button onClick={startRecording} type="button">
          Start
        </button>
        {/* <button onClick={stopRecording} type="button">
          Stop
        </button> */}
        <button onClick={handleSubmission}> Submit</button>
      </div>
      <ReactPlayer url={sound} />
    </div>
  );
}

export default RecordSite;

// const Title = styled.h1`
//   font-size: 5rem;
//   color: rgba(18, 49, 50);
//   text-align: center;
//   margin: 10rem 0rem 4rem 0rem;
// `;

// const Subtitle = styled.p`
//   font-size: 2rem;
//   color: rgba(18, 49, 50);
//   text-align: center;
//   margin-bottom: 6rem;
// `;

// const Button = styled.div`
//   width: 18rem;
//   height: auto;
//   padding: 1rem;
//   text-align: center;
//   font-size: 2rem;
//   background-color: rgb(62, 90, 91);
//   color: white;
//   cursor: pointer;
//   margin: 0 auto;
//   &:hover {
//     color: rgb(197, 170, 160);
//     transition: 0.4s;
//   }
// `;
