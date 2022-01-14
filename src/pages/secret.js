import React from "react";
import HomeLayout from "./layouts/HomeLayout";

import Ledge from "../images/ledge.jpg";

const SecretPage = () => {
  return (
    <HomeLayout>
      <div style={{ marginTop: "75px" }}>
        <h3 style={{ textAlign: "center" }}>Welcome to cjl.ee! Or is it?</h3>
        <img
          style={{
            display: "block",
            height: "500px",
            width: "auto",
            margin: "0 auto 0 auto",
          }}
          alt="CJ standing on a ledge"
          src={Ledge}
        ></img>
        <p style={{ textAlign: "center" }}>yeah this is basically it</p>
      </div>
    </HomeLayout>
  );
};

export default SecretPage;
