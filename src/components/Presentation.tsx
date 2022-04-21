import { x } from '@xstyled/styled-components';

import DefaultSlide from './Slides/DefaultSlide';
import IntroSlide from './Slides/IntroSlide';

import { PresentationType } from '../types/presentationTypes';

type PresentationProps = {
  presentation: PresentationType;
  slideNumber?: number;
};

const Presentation = ({ presentation, slideNumber = 0 }: PresentationProps): JSX.Element =>
  (
    <x.div
      display="flex"
      h="100vh"
    >
      {presentation.slides.slice(slideNumber, slideNumber + 1).map(
        (slide, index) => {
          switch (slide.type) {
            case 'intro':
              return <IntroSlide key={index} slide={slide} />;

            default:
              return <DefaultSlide key={index} slide={slide} />;
          }
        }
      )}
    </x.div>
  );

export default Presentation;
