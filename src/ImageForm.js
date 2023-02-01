import "./App.css";

function ImageForm() {
  // outline the image. Is this where the state should be kept?
  return (
    <form>
      <input
        type="text"
        name="name"
        className="form-control imageURL"
        id="imageURL"
        autoComplete="off"
        placeholder="Enter image URL here..."
      ></input>
      <input
        type="text"
        name="name"
        className="form-control captionSubmission"
        id="captionSubmission"
        autoComplete="off"
        placeholder="Write caption here!"
      ></input>
      <button type="submit" className="btn btn-primary">
        Submit URL
      </button>
      {/* Prevent default behavior on the button */}
    </form>
  );
}

export { ImageForm };
