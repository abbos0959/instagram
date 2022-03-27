import React, { useState } from "react";
import { Post } from "./Post";

const App = () => {
  const initialstate=[{
    caption:"captioncha",
    username:"Abbos",
    imageUrl:"https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320"

  },
  {
    caption:"salom  dunyo",
    username:"aziz",
    imageUrl:"https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320"


  }
]
  const [post,setpost]=useState(initialstate)
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
{post.map((value)=>(
  <Post imageUrl={value.imageUrl} username={value.username} caption={value.caption} />
))}
    </div>
  );
};

export default App;
