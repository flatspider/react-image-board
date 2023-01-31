import "./App.css";

function ImageForm() {
  // outline the image. Is this where the state should be kept?
  return (
    <form>
      <input
        type="text"
        name="name"
        className="form-control"
        id="imageURL"
        autoComplete="off"
      ></input>
      <button type="submit" className="btn btn-primary">
        Submit URL
      </button>
      {/* Prevent default behavior on the button */}
    </form>
  );
}

function ImageList() {
  // add to this list?
  return (
    <ul>
      <li>
        <img src="https://images.unsplash.com/photo-1591096490931-c07a285f8068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"></img>
        <figcaption>A cab crosses the road in the Lower East Side</figcaption>
      </li>
    </ul>
  );
}

function ImageBoard() {
  // this contains all of the images
  return (
    <div>
      {ImageForm()}
      {ImageList()}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">{ImageBoard()}</header>
    </div>
  );
}

export default App;
