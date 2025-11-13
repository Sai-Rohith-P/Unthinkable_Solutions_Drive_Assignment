import React, { useState } from "react";
import { uploadFile } from "../utils/api";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setText("");
        setError("");
    };

    const handleSubmit = async () => {
        if (!file) {
            setError("Please choose a file first.");
            return;
        }
        setLoading(true);
        setError("");
        setText("");

        try {
            const res = await uploadFile(file);
            if (res.error) {
                setError(res.error);
            } else {
                setText(res.text || "No text extracted.");
            }
        } catch (err) {
            setError("Upload failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-card">
            <input type="file" onChange={handleFileChange} accept=".pdf,image/*" />
            <div className="btn-row">
                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Processing..." : "Upload & Analyze"}
                </button>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="result">
                <h3>Extracted Text</h3>
                <pre>{text}</pre>
            </div>
        </div>
    );
}
