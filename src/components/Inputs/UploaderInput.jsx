import React from "react";
import classes from "./UploaderInput.module.css";
import { useState, useRef } from "react";
import uploadIcon from "../../Images/upload-icon.svg";

const UploaderInput = () => {
  const [file, setFile] = useState(null);
  const uploaderRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  //   console.log(file);

  return (
    <div className={classes["blog-form-uploader-container"]}>
      <label className={classes["blog-form-label"]}>ატვირთეთ ფოტო</label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => uploaderRef.current.click()}
        className={classes["blog-form-file-input-container"]}
      >
        <input
          onChange={handleFileChange}
          className="blog-form-file-input"
          type="file"
          hidden
          ref={uploaderRef}
        />
        <img
          className={classes["upload-icon"]}
          src={uploadIcon}
          alt="file"
        />
        <p>
          ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
        </p>
      </div>
    </div>
  );
};

export default UploaderInput;
