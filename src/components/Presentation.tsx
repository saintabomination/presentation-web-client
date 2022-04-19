import { x } from '@xstyled/styled-components';

import Slide from './Slide';

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
        (slide, index) =>
        <Slide key={index} slide={slide} />
      )}
    </x.div>
  );

export default Presentation;
