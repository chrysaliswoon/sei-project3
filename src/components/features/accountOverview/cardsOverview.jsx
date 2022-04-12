import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Cards({ url, cardName }) {
  return (
    <Carousel>
      <div>
        <img src={url} />
        <p className="card">{cardName}</p>
      </div>
    </Carousel>
  );
}
