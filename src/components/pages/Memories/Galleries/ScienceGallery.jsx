import React from "react";
import Gallery from "../Gallery.jsx";

const scienceImages = [
  "/images/science/science1...webp",
  "/images/science/science2.webp",
];

export default function ScienceGallery() {
  return <Gallery title="Scientific Explorations" images={scienceImages} />;
}
