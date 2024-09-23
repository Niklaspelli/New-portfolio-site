import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./LikeButton.css"; // Ensure this file is in the same directory as your component

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // Fetch the current like count from Netlify function
  useEffect(() => {
    fetch("/.netlify/functions/like")
      .then((response) => response.json())
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("Error fetching like count:", error));
  }, []);

  // Handle clicking the like button
  const handleLike = () => {
    fetch("/.netlify/functions/like", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("Error updating like count:", error));

    // Trigger the shake effect
    setIsShaking(true);
    setLikes(likes + 1);

    // Remove the shake effect after the animation duration (0.5s)
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          margin: "20px",
          color: "orange",
        }}
      >
        <FaThumbsUp size={42} className={isShaking ? "shake" : ""} />
      </button>
      <p style={{ marginBottom: "10px" }}>
        {likes} {likes === 1 ? "like" : "likes"}
      </p>
    </div>
  );
};

export default LikeButton;
