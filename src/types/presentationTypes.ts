export type SlideType = {
  type?: string;
  title?: string;
  subtitle?: string;
  points?: string[];
};

export type PresentationType = {
  slides: SlideType[];
};
