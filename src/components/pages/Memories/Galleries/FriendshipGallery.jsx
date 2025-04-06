import React from "react";
import Gallery from "../Gallery.jsx";

const friendshipImages = [
  "/images/friendship/1.jpg",
  "/images/friendship/2.jpg",
  "/images/friendship/3.jpg",
];

export default function FriendshipGallery() {
  return <Gallery title="Unforgettable Friendships" images={friendshipImages} />;
}
