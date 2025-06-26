import React, { useState } from "react";
import '../Styles/QrCode.css'
const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("150");

  const generateQR = async () => {
    setLoading(true);
    try {
      // use backticks for template string
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadQR = () => {
    if (!img) return;
    fetch(img)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => console.error("Download error:", err));
  };

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>

      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt="QR Code" className="qr-code-image" />}

      <div className="controls">
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          id="dataInput"
          type="text"
          value={qrData}
          placeholder="Enter data for QR code"
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image size (px):
        </label>
        <input
          id="sizeInput"
          type="number"
          min="50"
          max="1000"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          placeholder="150"
        />

        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR Code
        </button>

        <button
          className="download-button"
          disabled={!img}
          onClick={downloadQR}
        >
          Download QR Code
        </button>
      </div>

      <p className="footer">
        Designed By <span style ={{color:"yellow"}}>Rajesh </span>
      </p>
    </div>
  );
};
export default QrCode