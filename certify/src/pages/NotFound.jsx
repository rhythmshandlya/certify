import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_tonsVH.json"
        style={{ height: "900px", width: "900px" }}
      ></Player>
    </div>
  );
};

export default NotFound;
