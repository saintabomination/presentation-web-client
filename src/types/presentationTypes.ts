export type SlideType = {
  type?: string;
  title?: string;
  subtitle?: string;
  points?: string[];
  backgroundImage?: string;
  darkenValue?: number;
  slideColor?: string;
  footer?: string[];
};

export type PresentationType = {
  slides: SlideType[];
};
