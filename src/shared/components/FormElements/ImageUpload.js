import React, { useEffect, useRef, useState } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  // Image preview. Function execute whenever the file changes.
  useEffect(() => {
    if (!file) {
      // if image is undefined
      return;
    }
    // FileReader is a browser api to convert files to readable urls.
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  // Pass file to the form and upload to backend.
  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    // Check if file exist and it is exactly 1 file
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]; // extract file and get the first and only one
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  // Form handler
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }} // being hidden here but functionality remains
        type="file"
        accept=".jpg,.png,.jpeg" // input type file has a default accept attribute to configure accepted file types
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          UPLOAD IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
