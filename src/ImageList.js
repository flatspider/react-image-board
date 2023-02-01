import "./App.css";
function ImageList() {
  // add to this list?
  return (
    <ul>
      <li>
        <img src="https://images.unsplash.com/photo-1591096490931-c07a285f8068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"></img>
        <figcaption>A cab crosses the road in the Lower East Side</figcaption>
      </li>
      <li>
        {/*<img src={initialImages.imageURL}></img>
        <figcaption>{initialImages.caption}</figcaption> */}
      </li>
    </ul>
  );
}

export { ImageList };
