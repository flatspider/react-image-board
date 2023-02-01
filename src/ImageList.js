import "./App.css";

function ImageList({ images }) {
  // Destructuring and ripping images prop. by {images}
  // This function is passed an array of images.

  // const imagesHTML = images.map((image, index) => <li key={index}><img src={image.imageURL}>)
  // return ({imagesHTML})

  return (
    <ul>
      <li>
        <img src="https://images.unsplash.com/photo-1591096490931-c07a285f8068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"></img>
        <figcaption>A cab crosses the road in the Lower East Side</figcaption>
      </li>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image.imageURL}></img>
          <figcaption>{image.caption}</figcaption>
        </li>
      ))}
    </ul>
  );
}

export { ImageList };
