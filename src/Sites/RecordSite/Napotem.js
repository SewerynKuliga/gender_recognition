import React, { useState } from "react";
import Sound from "react-sound";
import Button from "./Button";
import "./styles.css";
import RecordingCount from "./RecordingCount";
// import { AudioFile } from "../../Contexts/AudioFile";

function Napotem() {
  const [title, setTitle] = useState("Record");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [audio, setAudio] = useState(null);
  // const { selectedFile, setSelectedFile } = useContext(AudioFile);

  const startListening = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const newMediaRecorder = new MediaRecorder(stream);
        newMediaRecorder.start();
        let chunks = [];
        newMediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };
        newMediaRecorder.onstop = function (e) {
          const blob = new Blob(chunks, { type: "audio/webm" });
          const audioURL = window.URL.createObjectURL(blob);
          const audio = document.createElement("audio");
          audio.setAttribute("id", "player");
          audio.src = audioURL;
          setAudio(audio);
        };
        setMediaRecorder(newMediaRecorder);
      })
      .catch(function (err) {
        console.log("The following getUserMedia error occured: " + err);
      });
  };

  const record = async () => {
    navigator.permissions.query({ name: "microphone" }).then(function (result) {
      if (result.state !== "granted") {
        alert("Must allow microphone to record");
        navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {});
      }
    });
    await startListening();
    setTitle("Square");
    const button = document.querySelector(".button");
    button.classList.add("pulse");
  };

  const play = () => {
    setPlayStatus(Sound.status.PLAYING);
    setTitle("Play-Square");
  };

  const stop = () => {
    setTitle("Play");
    const button = document.querySelector(".button");
    button.classList.remove("pulse");
    button.classList.add("play");
    mediaRecorder.stop();
  };

  const reset = () => {
    setTitle("Record");
    const button = document.querySelector(".button");
    button.classList.remove("play");
    setPlayStatus(Sound.status.STOPPED);
  };

  const submit = () => {
    const formData = new FormData();

    formData.append("audioFile", audio);

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

  const playStop = () => {
    setPlayStatus(Sound.status.STOPPED);
    setTitle("Play");
  };
  return (
    <div>
      {/* <Title>Record</Title>
      <Subtitle>
        Record an audio file no shorter than 2s and not longer than 4s in wav
        format
      </Subtitle>
      <Button>Record</Button> */}
      <div className="main-container">
        <Button
          title={title}
          record={record}
          play={play}
          stop={stop}
          audio={audio}
          playStop={playStop}
        />
        {title === "Play" ? (
          <div>
            <button className="redo-button" onClick={reset}>
              Reset
            </button>
            <button className="save-button" onClick={submit}>
              Submit
            </button>
          </div>
        ) : (
          <>
            {title === "Record" ? (
              <div className="sub-text">Tap the microphone to record</div>
            ) : (
              <RecordingCount />
            )}
          </>
        )}
        {audio ? (
          <>
            <Sound
              url={audio.src}
              onFinishedPlaying={playStop}
              playStatus={playStatus}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Napotem;
