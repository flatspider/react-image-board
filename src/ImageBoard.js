import "./App.css";
import { ImageForm } from "./ImageForm.js";
import { ImageList } from "./ImageList.js";
import { useState } from "react";

const INITIAL_IMAGES = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    caption: "Cozy little bookstore in Seattle.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    caption: "Bulbs dangling.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572499234610-4b7fd450e8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    caption: "New York Public library.",
  },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_IMAGES);
  // this contains all of the images
  // Also need variable for caption

  //const todosHTML = todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  //const imageHTML = images.map((image) => (
  // <ImageList src={image.imageURL}></ImageList>
  //));

  return (
    <div>
      {ImageForm()}
      {ImageList()}
    </div>
  );
}

export { ImageBoard };
