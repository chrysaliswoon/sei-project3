import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cardImages from "../../../testData/cards";

export default function Cards() {
  const cards = cardImages.map(({ url, cardName }) => (
    <div>
          <img src={url} alt={cardName}/>
    </div>
  ));

  return <Carousel>{cards}</Carousel>;
}
