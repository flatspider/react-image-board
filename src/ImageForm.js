import "./App.css";
import { useState } from "react";

function ImageForm({ onSubmit }) {
  const [imageURL, setImageURL] = useState(""); // Use state to set the initial value to empty string.
  const [caption, setImageCaption] = useState(""); // Sets caption state to empty string.

  const handleSubmit = (submits) => {
    submits.preventDefault(); // Stops the button from refreshing the page.
    onSubmit({ imageURL, caption }); // Pull in the values of image and caption that the user typed.
    // const newImage = {url, caption}; url: url, and caption: caption
    // using onSubmit destructuring to call the handleSubmit function on the image board.
    // onSubmit(newImage); This uses my function to read the image.
    setImageURL(""); // Clears the input box.
    setImageCaption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="url"
        className="form-control imageURL"
        id="imageURL"
        autoComplete="off"
        placeholder="Enter image URL here..."
        value={imageURL}
        onChange={(event) => setImageURL(event.target.value)} // This watches each change to the input and returns the current value
      ></input>
      <input
        type="text"
        name="caption"
        className="form-control captionSubmission"
        id="captionSubmission"
        autoComplete="off"
        placeholder="Write caption here!"
        value={caption}
        onChange={(event) => setImageCaption(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary">
        Submit URL
      </button>
      {/* Prevent default behavior on the button */}
    </form>
  );
}

export { ImageForm };
