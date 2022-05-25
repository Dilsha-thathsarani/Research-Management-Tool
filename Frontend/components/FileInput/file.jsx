import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
import check from "../FileInput/check.png";

const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  const handleUpload = () => {
    setProgressShow(true);
    const fileName = new Date().getTime() + value.name;

    const storageRef = ref(
      storage,
      type === "file" ? `/file/${fileName}` : `/images/${fileName}`
    );
    const uploadTask = uploadBytesResumable(storageRef, value);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploaded);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          handleInputState(name, url);
        });
      }
    );
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
        vlaue={value}
        {...rest}
      />
      <button type="button" onClick={() => inputRef.current.click()}>
        {label}
      </button>

      {type === "file" && value && (
        <document
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          controls
        />
      )}
      {value !== null && !progressShow && typeof value !== "string" && (
        <button onClick={handleUpload}>Upload</button>
      )}
      {progressShow && progress < 100 && (
        <div>
          <p>{progress}%</p>
        </div>
      )}
      {progress === 100 && (
        <div>
          <img src={check} alt="check circle" />
        </div>
      )}
    </div>
  );
};

export default FileInput;