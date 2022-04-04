import Slide from './Slide';

import { PresentationType } from '../types/presentationTypes';

type PresentationProps = {
  presentation: PresentationType;
};

const Presentation = ({ presentation }: PresentationProps): JSX.Element =>
  (
    <div>
      {presentation.slides.map(
        (slide, index) =>
        <Slide key={index} slide={slide} />
      )}
    </div>
  );

export default Presentation;
