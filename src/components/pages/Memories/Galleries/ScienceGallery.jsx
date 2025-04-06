import React from "react";
import Gallery from "../Gallery.jsx";

const scienceImages = [
  "/images/science/1.jpg",
  "/images/science/2.jpg",
  "/images/science/3.jpg",
  "/images/science/4.jpg",
];

export default function ScienceGallery() {
  return <Gallery title="Scientific Explorations" images={scienceImages} />;
}
