import React from "react";
import memesData from "../memeData.js";

export default function Meme() {
  const [imageUrl, setImageUrl] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(
    memesData.data.memes
  );
  console.log(imageUrl);

  function getImage() {
    const index = Math.floor(Math.random() * 100);

    const { url } = allMemeImages[index];
    setMeme((prev) => ({ ...prev, randomImage: url }));
  }

  function changeText(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top text"
          className="form--input"
          onChange={changeText}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          className="form--input"
          onChange={changeText}
        />
        <button className="form--button" onClick={getImage}>
          Get a new meme image
        </button>
      </div>
      <p></p>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
