import React from "react";
import { Carousel } from "./Carousel";

export const Home: React.FC = () => {
  return (
    <div style={{maxWidth: 1200, margin: '50px auto'}}>
      <Carousel />
    </div>
  );
};
