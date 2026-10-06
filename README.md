Project Report: DocuScan — Document Scanner & Enhancer
1. Introduction
DocuScan is a full-stack computer vision application designed to simulate a physical document scanner. It takes standard digital photos or scanned images and applies advanced image-processing algorithms to clean backgrounds, boost contrast, and enhance text readability into a crisp black-and-white layout.

2. System Architecture & Tech Stack
The application follows a decoupled client-server architecture:

Frontend: React (powered by Vite) providing a responsive user interface for image uploads and real-time previewing.

Backend: Python with FastAPI handling high-performance asynchronous HTTP requests.

Image Processing Engine: OpenCV (cv2) and NumPy for matrix manipulation and computer vision algorithms.

3. Core Features & Implementation
Asynchronous Image Upload: Users can upload images dynamically through an intuitive web interface.

Computer Vision Pipeline:

Grayscale Conversion: Eliminates color noise.

Gaussian Blur: Smooths out high-frequency irregularities.

Adaptive Thresholding: Dynamically computes pixel thresholds to binarize text and background, simulating scanner clarity.

Cross-Origin Resource Sharing (CORS): Enabled middleware on FastAPI to establish secure communication between the local development server and client.

4. Project Structure
Plaintext
ComputerVision-Project/
├── backend/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       └── main.jsx
└── README.md
5. Setup and Installation Guide
Backend Setup
Navigate to the backend directory:

Bash
cd backend
Create and activate a virtual environment:

Bash
python -m venv venv
venv\Scripts\activate  # On Windows
Install dependencies:

Bash
pip install -r requirements.txt
Run the server:

Bash
uvicorn main:app --reload --port 8000
Frontend Setup
Open a new terminal and navigate to the frontend directory:

Bash
cd frontend
Install Node packages:

Bash
npm install
Run the development server:

Bash
npm run dev
6. Conclusion
DocuScan successfully bridges raw image processing techniques with a modern web frontend, delivering an efficient tool for document enhancement and digital record management.
