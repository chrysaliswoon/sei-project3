import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import data from "../../../testData/cards";

export default function Cards({onClick}) {
    const cards = data.map(({ url, cardName, cardDesc, id }) => (
      <div key={id}>
        <img src={url} alt={cardName} />
        <p className={cardDesc}>{cardDesc}</p>
      </div>
    ));

  return (
    <div>
      <Carousel
        width="300px"
        showArrows={true}
        emulateTouch={true}
        onClickThumb={onClick}
      >
        {cards}
      </Carousel>
    </div>
  );
}


