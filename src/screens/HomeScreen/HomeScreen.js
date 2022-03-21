import React from "react";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const user = useSelector(({ user }) => user);

  return (
    <div>
      {!user.auth ? (
        <div>home page screen</div>
      ) : (
        <div>
          <p>Name: {user.data.name}</p>
          <p>Email: {user.data.email}</p>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
