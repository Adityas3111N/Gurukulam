import React from "react";
import Gallery from "../Gallery.jsx";

const achievementsImages = [
  "/images/achievements/1.jpg",
  "/images/achievements/2.jpg",
  "/images/achievements/3.jpg",
];

export default function AchievementsGallery() {
  return <Gallery title="Proud Achievements" images={achievementsImages} />;
}
