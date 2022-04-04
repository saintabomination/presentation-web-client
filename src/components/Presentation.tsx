import Slide from './Slide';

import { PresentationType } from '../types/presentationTypes';

type PresentationProps = {
  presentation: PresentationType;
  slideNumber?: number;
};

const Presentation = ({ presentation, slideNumber = 0 }: PresentationProps): JSX.Element =>
  (
    <div>
      {presentation.slides.slice(slideNumber, slideNumber + 1).map(
        (slide, index) =>
        <Slide key={index} slide={slide} />
      )}
    </div>
  );

export default Presentation;
