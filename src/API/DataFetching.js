import { useContext } from "react";
import { AudioFile } from "../Contexts/AudioFile";

export const SendFile = () => {
  const { selectedFile } = useContext(AudioFile);
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
