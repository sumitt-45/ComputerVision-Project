import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setProcessedImage(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/api/process-document', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setProcessedImage(URL.createObjectURL(blob));
      } else {
        alert('Failed to process document.');
      }
    } catch (error) {
      console.error('Error connecting to backend:', error);
      alert('Error connecting to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>DocuScan — Document Scanner & Enhancer</h1>
      <p>Upload a document image to clean, enhance, and convert it into a crisp scanned layout.</p>

      <div style={{ margin: '1.5rem 0' }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button 
          onClick={handleUpload} 
          disabled={!selectedFile || loading}
          style={{ marginLeft: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          {loading ? 'Processing...' : 'Enhance Document'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        {selectedFile && (
          <div>
            <h3>Original Preview</h3>
            <img 
              src={URL.createObjectURL(selectedFile)} 
              alt="Original" 
              style={{ maxWidth: '350px', border: '1px solid #ccc' }} 
            />
          </div>
        )}

        {processedImage && (
          <div>
            <h3>Enhanced Output</h3>
            <img 
              src={processedImage} 
              alt="Processed" 
              style={{ maxWidth: '350px', border: '1px solid #ccc' }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;