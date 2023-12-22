import classes from "./UploaderInput.module.css";
import { useState, useRef } from "react";
import uploadIcon from "../../Images/upload-icon.svg";
import imageIcon from "../../Images/image-icon.svg";
import closeBtn from "../../Images/close-btn-icon.svg";

const UploaderInput = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const uploaderRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setUploadedFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  // console.log(uploadedFile);

  return (
    <>
      {uploadedFile ? (
        <div className={classes["blog-form-uploaded-container"]}>
          <div className={classes["blog-form-uploaded-inner"]}>
            <img
              src={imageIcon}
              alt="pic"
              className={classes["blog-form-uploaded-image-icon"]}
            />
            <h2 className={classes["blog-form-uploaded-file-name"]}>{uploadedFile?.name}</h2>
          </div>
          <button
            onClick={() => setUploadedFile(null)}
            className={classes["close-btn"]}
          >
            <img
              src={closeBtn}
              alt="close btn"
              className={classes["close-btn-icon"]}
            />
          </button>
        </div>
      ) : (
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
              accept="image/png, image/gif, image/jpeg, image/svg"
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
      )}
    </>
  );
};

export default UploaderInput;
