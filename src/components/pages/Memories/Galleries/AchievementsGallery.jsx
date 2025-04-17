import React from "react";
import Gallery from "../Gallery.jsx";

const achievementsImages = [
  "/images/achievements/achievement1.webp",
  "/images/achievements/achievement2.webp",
  "/images/achievements/achievement4.webp",
  "/images/achievements/achievement6.webp",
  "/images/achievements/achievement7.webp",
  "/images/achievements/achievementgirl.webp",
];

export default function AchievementsGallery() {
  return <Gallery title="Proud Achievements" images={achievementsImages} />;
}
