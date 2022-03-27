import React from "react";
import { Post } from "./Post";

const App = () => {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>

      <Post username="Abbos" imageUrl="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'"/>
      <Post/>
    </div>
  );
};

export default App;
