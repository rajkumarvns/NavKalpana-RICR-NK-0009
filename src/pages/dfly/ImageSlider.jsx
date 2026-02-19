import React from "react";
import SimpleImageSlider from "./SimpleImageSlider";

const images = [
  "/df/d1.jpeg",
 "/df/d2.jpg",
 "/df/d3.webp",
 "/df/d4.webp",
 "/df/d5.jpg"
];

export default function ImageSlider() {
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
