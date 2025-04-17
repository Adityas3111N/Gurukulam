import React from "react";
import Gallery from "../Gallery.jsx";

const friendshipImages = [
  "/images/khusiyan/khusiyan13.webp",
  "/images/khusiyan/khusiyan5.webp",
  "/images/khusiyan/khusiyan3.webp",
  "/images/khusiyan/khusiyan8.webp",
  "/images/khusiyan/khusiyan16.webp",
];

export default function FriendshipGallery() {
  return <Gallery title="Unforgettable Friendships" images={friendshipImages} />;
}
