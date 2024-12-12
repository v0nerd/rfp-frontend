import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const baseURL =
    "http://a15d41b0c72154d29a62a8e920d6f57f-422812633.us-east-2.elb.amazonaws.com:8080";

const API = axios.create({
    baseURL: proxyUrl + baseURL, // Prepend the proxy URL to the API's base URL
});

// Upload file
export const uploadFile = (formData) => API.post("/upload/", formData);

// Generate proposal
export const generateProposal = (formData) =>
    API.post("/generate/proposal/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

// Generate compliance report
export const generateComplianceReport = (formData) =>
    API.post("/generate/compliance-report/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
