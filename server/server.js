// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const fs = require("fs");
// const Tesseract = require("tesseract.js");

// const pdfParse = (...args) => import("pdf-parse").then(mod => mod.default(...args));

// const app = express();
// app.use(cors());

// // Configure Multer to store uploaded files temporarily in the uploads folder
// const upload = multer({ dest: "uploads/" });

// // POST route for file upload
// app.post("/upload", upload.single("file"), async (req, res) => {
//     const file = req.file;
//     if (!file) return res.status(400).json({ error: "No file uploaded" });

//     const filePath = file.path;

//     try {
//         let extractedText = "";

//         // ✅ If file is a PDF
//         if (file.mimetype === "application/pdf") {
//             const dataBuffer = fs.readFileSync(filePath);
//             const data = await pdfParse(dataBuffer);
//             extractedText = data.text;
//         }
//         // ✅ If file is an image
//         else if (file.mimetype.startsWith("image/")) {
//             const { data: { text } } = await Tesseract.recognize(filePath, "eng");
//             extractedText = text;
//         }
//         // ❌ Unsupported file type
//         else {
//             return res.status(400).json({ error: "Unsupported file type" });
//         }

//         // Send the extracted text to frontend
//         res.json({ text: extractedText || "No text found in the file." });
//     } catch (error) {
//         console.error("Error extracting text:", error);
//         res.status(500).json({ error: "Failed to extract text" });
//     } finally {
//         // Clean up uploaded file to save space
//         fs.unlinkSync(filePath);
//     }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));


const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const Tesseract = require("tesseract.js");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = file.path;

    try {
        let extractedText = "";

        // ✅ If PDF
        if (file.mimetype === "application/pdf") {
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdfParse(dataBuffer); // ✅ works perfectly in v1.1.1
            extractedText = data.text;
        }

        // ✅ If Image
        else if (file.mimetype.startsWith("image/")) {
            const { data: { text } } = await Tesseract.recognize(filePath, "eng");
            extractedText = text;
        }

        // ❌ Unsupported
        else {
            return res.status(400).json({ error: "Unsupported file type" });
        }

        res.json({ text: extractedText || "No text found in the file." });
    } catch (error) {
        console.error("Error extracting text:", error);
        res.status(500).json({ error: "Failed to extract text" });
    } finally {
        fs.unlinkSync(filePath);
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

