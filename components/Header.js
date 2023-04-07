import React from "react";
import image from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={image} className="header--image" />
      <h2 className="header--logo-text">Meme generator</h2>
      <p className="header--text">React Course - Project 3</p>
    </header>
  );
}
