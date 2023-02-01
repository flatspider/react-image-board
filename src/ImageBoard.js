import "./App.css";
import { ImageForm } from "./ImageForm.js";
import { ImageList } from "./ImageList.js";
import { useState } from "react";

function ImageBoard() {
  const [images, setImages] = useState([]); // Sets image array to empty.

  const handleSubmit = (newImage) => {
    // This spreads the images array and adds the new image to the end.
    setImages([...images, newImage]);
  };

  return (
    <div>
      <ImageForm onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export { ImageBoard };
