import React from "react";
import CardComponent from "../CardComponent";
import { ISectionProp } from "./Section.types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperEvent from "swiper";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Section: React.FC<ISectionProp> = ({
  sections,
  scrollType,
  onLastSlide,
  onFirstSlide,
  onSlideChange,
}) => {
  const handleReachEnd = () => {
    if (onLastSlide) onLastSlide();
  };

  const handleReachBeginning = () => {
    if (onFirstSlide) onFirstSlide();
  };

  const handleSlideChange = (event: SwiperEvent) => {
    if (onSlideChange) onSlideChange(event.activeIndex);
  };

  return (
    <Swiper
      direction={scrollType}
      speed={1100}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel]}
      onReachEnd={handleReachEnd}
      onReachBeginning={handleReachBeginning}
      onSlideChange={handleSlideChange}
    >
      {sections.map((section, index) => (
        <SwiperSlide key={index}>
          <CardComponent section={section} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Section;
