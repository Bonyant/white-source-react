import React from "react";
import Post from "../Components/Post";
import NewsData from "../data/data.json";

export default function News() {
  return (
    <div>
      <div className="heading">
        <h1>The Latest News</h1>
      </div>
      {NewsData.news.map((post, index)=>{
          return <Post id={index} />
      })}
    </div>
  );
}
