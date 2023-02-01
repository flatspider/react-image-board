import "./App.css";
import { ImageBoard } from "./ImageBoard.js";

// Place each of these functions into their own component. This is their own javascript file.

// Read the url state from the input box className="form-control"
// Take that url and place it into the source of an image tag.
// Add the injected HTML into the list. Probably spread the current list {...list, newImage.list}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageBoard />
      </header>
    </div>
  );
}

export default App;
