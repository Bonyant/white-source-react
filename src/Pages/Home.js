import React, { useState, useEffect } from "react";
import { Image, Button } from "react-bootstrap";

const Home = () => {
  const API_URL = "https://my-json-server.typicode.com/Bonyant/fakeapi/images/";

  const [image, setImage] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setImage(data);
  };

  return (
    <div className="heading">
      {image.map((index) => (
        <div style={{ margin: "100px 0" }}>
          <a href={index.url} target="_blank">
            <Image
              className="border border-dark rounded forImg mx-auto d-block"
              id={index.id}
              src={index.src}
              alt={index.alt}
            />
          </a>
          {/*
          <p className="space"></p>
          <Button
            className="fa forButton mx-auto d-block"
            variant="success"
            style={{ width: "200px", height: "auto" }}
            onClick={() => window.open(index.url)}
          >
            {index.alt}
          </Button>
          */}
        </div>
      ))}
    </div>
  );
};

export default Home;
