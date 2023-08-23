import { ISection, TypeScroll } from "../PageScroll/PageScroll.types";

export interface ISectionProp {
  sections: ISection[];
  scrollType: TypeScroll;
  onLastSlide?: () => void;
  onFirstSlide?: () => void;
  onSlideChange: (index: number) => void;
}
