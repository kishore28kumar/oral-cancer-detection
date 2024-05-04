import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ImgForm() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("No File Selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);

    axios
      .post(" http://127.0.0.1:5000/predict", fd, {
        onUploadProgress: (progressEvent) =>
          console.log(progressEvent.progress * 100),
      })
      .then((res) => {
        console.log(res.data.prediction);
        localStorage.setItem("resultVal", res.data.prediction);
        navigate("/result");
      })
      .catch((err) => console.error(err));
    console.log();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section className="imgf">
      <div className="d-flex justify-content-center">
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="file-input" className="upload-btn btn rounded-pill">
          Choose File
        </label>
        <span className="file-name d-flex align-items-center">{filename}</span>
        <button
          type="submit"
          onClick={handleUpload}
          className="upload-btn btn rounded-pill"
        >
          Upload
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        {imageUrl && (
          <img src={imageUrl} className="Uploaded-img" alt="Uploaded" />
        )}
      </div>
    </section>
  );
}
