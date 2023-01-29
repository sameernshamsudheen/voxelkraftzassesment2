import React from "react";

const ImageGallery = ({ imageData, setImageData }) => {
  const handleRemove = (item) => {
    const filterdarray = imageData.filter((k) => k.src !== item.src);

    console.log(filterdarray, "filtered array");
    setImageData([...filterdarray]);
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem 1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {imageData?.map((src, index) => {
        return (
          <div
            style={{
              display: "flex",
              margin: "0  2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}
            className="image"
          >
            <img src={`${src.src && src.src}`} />

            <button
              style={{ margin: "0 1rem" }}
              onClick={() => {
                handleRemove(src);
              }}
              className="remove"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
