import React from "react";

function NoticeNoArtifact() {
  return (
    <p>
      <span role="img" aria-label="Caution">
        ⚠️
      </span>{" "}
      Cannot find <span className="code">SimpleStorage</span> contract artifact.
      Please complete the above preparation first, then restart the react dev
      server.
    </p>
  );
}

export default NoticeNoArtifact;
