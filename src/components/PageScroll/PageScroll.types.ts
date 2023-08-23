export interface IIcon {
  title: string;
  src: string;
  colored: boolean;
  type: string;
}

export interface ISection {
  Title: string;
  Description: string;
  Fulltext: string;
  Image: string;
  icons: IIcon[];
}

export type TypeScroll = "vertical" | "horizontal";

export interface IPage {
  scrollType: TypeScroll;
  sections: ISection[];
}

export interface IDataIconsStack {
  pages: IPage[];
}
