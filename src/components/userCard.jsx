import React from "react";
import "./UserCard.css";

function UserCard({img,name}) {
  return (
    <div className="user-card">
      <img
        src={img}
        alt="User"
        className="user-img"
      />

      <h2>{name}</h2>
    </div>
  );
}

export default UserCard;