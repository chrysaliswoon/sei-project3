import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cardImages from "../../../testData/cards";

export default function Cards() {
    const cards = cardImages.map(({ url, cardName, cardDesc }) => (
      <div>
        <img src={url} alt={cardName} />
        <p className={cardDesc}>{cardDesc}</p>
      </div>
    ));

  return (
    <div>
      <Carousel width="300px" showArrows={true}>
        {cards}
      </Carousel>
    </div>
  );
}


