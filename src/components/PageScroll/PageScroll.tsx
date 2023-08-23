import { Box } from "@mui/material";
import React, { useState } from "react";
import { IDataIconsStack } from "./PageScroll.types";
import { style } from "./styles";
import IconsRenderer from "../IconsRenderer";
import Section from "../Section";

const PageScroll: React.FC<IDataIconsStack> = ({ pages }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSection(index);
  };

  const goToNextPage = () => {
    if (activePageIndex < pages.length - 1) {
      setActivePageIndex((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (activePageIndex > 0) {
      setActivePageIndex((prev) => prev - 1);
    }
  };

  return (
    <Box sx={style.container}>
      <Box sx={style.fixedIcons}>
        <IconsRenderer
          icons={pages[activePageIndex].sections[activeSection].icons}
        />
      </Box>

      <Box sx={style.sectionContainer}>
        <Section
          key={activePageIndex}
          sections={pages[activePageIndex].sections}
          scrollType={pages[activePageIndex].scrollType}
          onLastSlide={goToNextPage}
          onFirstSlide={goToPreviousPage}
          onSlideChange={handleSlideChange}
        />
      </Box>
    </Box>
  );
};

export default PageScroll;
