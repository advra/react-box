import React from "react";

function NoticeWrongNetwork() {
  return (
    <p>
      <span role="img" aria-label="caution">
        ⚠️
      </span>{" "}
      MetaMask is not connected to the same network as the one you deployed to.
    </p>
  );
}

export default NoticeWrongNetwork;
