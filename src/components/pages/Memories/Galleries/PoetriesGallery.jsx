import React from "react";
import Gallery from "../Gallery.jsx";

const poetriesImages = [
  "/images/art/art2...webp",
  "/images/art/art...webp",
];

export default function PoetriesGallery() {
  return <Gallery title="Poetic Expressions" images={poetriesImages} />;
}
