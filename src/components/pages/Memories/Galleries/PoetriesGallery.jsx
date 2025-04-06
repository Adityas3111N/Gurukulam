import React from "react";
import Gallery from "../Gallery.jsx";

const poetriesImages = [
  "/images/poetries/1.jpg",
  "/images/poetries/2.jpg",
  "/images/poetries/3.jpg",
];

export default function PoetriesGallery() {
  return <Gallery title="Poetic Expressions" images={poetriesImages} />;
}
