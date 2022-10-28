import React from "react";

const User = ({ name, gender, email }) => {
  const { title, first, last } = name;
  return (
    <div>
      <div className="each-user">
        <p>
          {" "}
          Name: {title} {first} {last}{" "}
        </p>
        <p> Gender: {gender} </p>
        <p> Email: {email} </p>
      </div>
    </div>
  );
};

export default User;
