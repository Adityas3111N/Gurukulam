// components/pages/galleries/SportsGallery.jsx
import React from "react";
import Gallery from "../Gallery.jsx";

const sportsImages = [
  "/images/sports/sportsgirls.webp",
  "/images/sports/sports1...webp",
  "/images/sports/3.jpg",
  "/images/sports/4.jpg",
  "/images/sports/5.jpg",
  "/images/sports/6.jpg",
];

export default function SportsGallery() {
  return <Gallery title="Sports Moments" images={sportsImages} />;
}
