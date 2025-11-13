import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="container">
      <h1>Social Media Content Analyzer</h1>
      <p className="subtitle">Upload a PDF or image to extract text (OCR for images).</p>
      <FileUpload />
    </div>
  );
}

export default App;
