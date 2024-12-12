import React, { useState } from "react";
import { Button, Typography, Box, Paper, CircularProgress, Fade } from "@mui/material";
import { generateProposal } from "../api";

const ProposalForm = () => {
  const [file, setFile] = useState(null);
  const [proposalUrl, setProposalUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true); // Show loading spinner
    setProposalUrl(null); // Reset the previous proposal URL
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await generateProposal(formData);
      const blob = new Blob([response.data], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      setProposalUrl(url); // Set the blob URL for the HTML document
    } catch (error) {
      alert("Error generating proposal.");
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f3f4f6, #e3e5e8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "2rem",
          borderRadius: "20px",
          maxWidth: "95%",
          width: "100%",
          textAlign: "center",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#3f51b5" }}>
          Generate Proposal
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#666", marginBottom: "1rem" }}
        >
          Upload a RFP file to generate a professional proposal.
        </Typography>
        <Box
          sx={{
            position: "relative",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              cursor: "pointer",
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              padding: "0.8rem",
              border: "1px dashed #aaa",
              borderRadius: "10px",
              width: "100%",
              backgroundColor: "#f9f9f9",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f1f1f1",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              },
            }}
          >
            {file ? file.name : "Click to select a file"}
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "#fff",
            transition: "transform 0.3s ease, background 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #2575fc, #6a11cb)",
              transform: "scale(1.05)",
            },
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Generate"}
        </Button>
      </Paper>
      <Fade in={Boolean(proposalUrl)} timeout={500}>
        <Box
          sx={{
            marginTop: "2rem",
            maxWidth: "95%",
            width: "100%",
            height: "500px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {proposalUrl && (
            <iframe
              src={proposalUrl}
              title="Proposal Document"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default ProposalForm;
