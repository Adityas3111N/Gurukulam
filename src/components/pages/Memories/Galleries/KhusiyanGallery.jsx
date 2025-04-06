import React from "react";
import Gallery from "../Gallery.jsx";

const khusiyanImages = [
  "/images/khusiyan/1.jpg",
  "/images/khusiyan/2.jpg",
  "/images/khusiyan/3.jpg",
];

export default function KhusiyanGallery() {
  return <Gallery title="Moments of Joy" images={khusiyanImages} />;
}
