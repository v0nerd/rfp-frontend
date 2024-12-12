import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../api";

const UploadFile = () => {
  const [message, setMessage] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (files) => {
      const formData = new FormData();
      formData.append("file", files[0]);

      try {
        const response = await uploadFile(formData);
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Upload failed.");
      }
    },
    accept: ".pdf, .docx",
  });

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Upload Your File
      </Typography>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #1976d2",
          borderRadius: "10px",
          padding: "2rem",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <Typography>Drag & drop a file here, or click to select one</Typography>
      </div>
      <Typography variant="subtitle1" color="secondary" style={{ marginTop: "1rem" }}>
        {message}
      </Typography>
    </div>
  );
};

export default UploadFile;
