import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

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
  };

  return (
    <div>
      <button
        onClick={handleLike}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <FaThumbsUp size={42} />
      </button>
      <p>
        {likes} {likes === 1 ? "like" : "likes"}
      </p>
    </div>
  );
};

export default LikeButton;
