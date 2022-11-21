import React from "react";

function Welcome() {
  return (
    <div className="welcome">
      <h1>
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Welcome to the Truffle + React + Typescript Box!
      </h1>
      <p>
        This is everything you need to start using Truffle to write, compile,
        test, and deploy smart contracts, and interact with them from a React
        app.
      </p>
    </div>
  );
}

export default Welcome;
