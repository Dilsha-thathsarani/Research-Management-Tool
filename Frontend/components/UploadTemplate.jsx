import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";

export default function UploadTemplate() {
  const [Admin_Name, setAdminName] = useState("");
  const [Title, setTitle] = useState("");
  const [Template, setTemplate] = useState("");
  const [Description, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newDoc = {
      Admin_Name,
      Title,
      Template,
      Description,
    };
    axios
      .post("http://localhost:8070/template/docTemplate", newDoc)
      .then(() => {
        alert("Added New Submit Type");
        e.target.reset(); // to clear input fiels after submission
      })
      .catch((err) => {
        alert("err");
      });
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <div className="t-list-container">
          <div style={{ backgroundColor: "#0F0934" }}>
            <div>
              <img
                className="img-side"
                src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"
              ></img>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div className="t-list-head-container">
              <label className="h-text" style={{ color: "#FF5631" }}>
                {" "}
                UPLOAD
              </label>{" "}
              <br className="br1" />
              <label className="h-text">Document/Presentation Template</label>
            </div>

            <div className="t-list-tb-container mt-2">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Admin Name:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  onChange={(e) => {
                    setAdminName(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Document/Presentation Title:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="t-form-label">
                  <b>Upload Template/Document</b>
                </label>
                <div className="col-sm-4">
                  <input
                    className="form-control"
                    style={{ width: "450px" }}
                    type="file"
                    id="image"
                    required
                  />

                  <br></br>
                </div>
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Description about the Template/Document:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <br></br>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                  marginLeft: "50%",
                }}
              >
                UPLOAD
              </button>
            </div>

            <div className="bottom-t-container">
              <label className="bottom-t" style={{ color: "#FF5631" }}>
                {" "}
                SLIIT
              </label>{" "}
              <label className="bottom-t"> Research</label> <br />
              <label className="bottom-t"> Management Tool</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}