export type SlideType = {
  type?: string;
  title?: string;
  subtitle?: string;
  points?: string[];
  footer?: string[];
};

export type PresentationType = {
  slides: SlideType[];
};
