import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [imageData, setImageData] = useState([
    {
      src: "https://bit.ly/3lmYVna",
    },
    {
      src: "https://bit.ly/3flyaMj",
    },
  ]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2> IMAGE GALLERY</h2>
      </div>
      <ImageGallery imageData={imageData} setImageData={setImageData} />
    </>
  );
}

export default App;
