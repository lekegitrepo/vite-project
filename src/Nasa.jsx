import { useState, useEffect } from "react";
import "./App.css";

function Nasa() {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [mediaType, SetMediaType] = useState("");

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.url);
        setDescription(data.explanation);
        SetMediaType(data.media_type);
      })
      .catch((err) => err);
  }, []);

  if (!url && !description && !mediaType) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  } else {
    return (
      <>
        <div>
          {mediaType === "image" ? (
            <img src={url} alt="Nasa APOD" style={{ width: "60%" }} />
          ) : (
            <iFrame
              height="520"
              width="415"
              src={url}
              title="Nasa APOD"
            ></iFrame>
          )}
        </div>
        <div>{description}</div>
      </>
    );
  }
}

export default Nasa;
