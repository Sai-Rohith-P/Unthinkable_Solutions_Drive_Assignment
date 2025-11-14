Social Media Content Analyzer

A web application that extracts text from PDF documents and image files using PDF parsing and OCR (Optical Character Recognition). Built using the MERN stack, deployed entirely on Render.

🚀 Features

📤 Upload PDF or Image files

🔍 Extract text from PDFs using pdf-parse

🖼️ Extract text from images using Tesseract OCR

⚡ Fast API processing

🎯 Clean and simple UI built with React

🔄 Loading and error states for smooth UX

☁️ Fully deployed on Render (Frontend + Backend)

🛠️ Tech Stack
Frontend

React.js

Fetch API

CSS

Backend

Node.js

Express.js

Multer (file upload)

pdf-parse

Tesseract.js

CORS

Deployment

Render (Frontend)

Render (Backend)

⚙️ How It Works

User uploads a PDF or image file

Backend receives file via Multer

PDFs → processed using pdf-parse

Images → processed using Tesseract OCR

Extracted text is sent back as JSON

UI displays the extracted content

▶️ Live Demo

🔗 Frontend Live URL:
https://unthinkable-solutions-drive-frontend.onrender.com/

🧩 API Endpoint

POST /upload
Accepts: file (PDF or Image)
Returns: Extracted text in JSON format

📁 Project Structure
root/
│── frontend/   → React App
│── backend/    → Express Server (OCR + PDF parsing)

🧪 Local Setup
1️⃣ Clone the repo
git clone <your-repo-url>
cd your-project

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

📄 Approach (Short Summary)

The project uses a Node.js backend to process uploaded files with pdf-parse and Tesseract. The frontend, built with React, provides a clean file upload interface. Both services are deployed on Render. The goal was to create a simple, reliable, and production-ready text extraction tool.

👨‍💻 Developer

Rohith
Computer Science Engineering | MERN Stack Developer
Passionate about building real-world web applications.




For this assignment, I built a “Social Media Content Analyzer” that extracts text from uploaded PDF and image files. My goal was to develop a simple, efficient, and user-friendly system that handles real-world document analysis. I used the MERN stack along with OCR and PDF parsing tools to achieve accurate text extraction.

On the backend, I created a Node.js and Express server with Multer to handle file uploads. For PDF text extraction, I used pdf-parse, which provides clean and structured text output. For image files such as scanned documents, I integrated Tesseract OCR to accurately detect and extract text. I also added basic error handling, file validation, and automatic file cleanup to ensure smooth and safe processing. The backend is deployed on Render, configured using the appropriate dynamic port to support cloud hosting.

On the frontend, I built a simple React interface where users can upload files using a clean drag-and-drop or file-picker option. I added loading states to improve user experience and API integration to communicate with the backend. The frontend is also deployed on Render.

Overall, my approach focused on clean code, clear UI, reliable text extraction, and smooth deployment, ensuring a fully working production-ready application.
