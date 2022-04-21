import { x } from '@xstyled/styled-components';

import SlideBase from './Slides/SlideBase';
import DefaultSlide from './Slides/DefaultSlide';
import IntroSlide from './Slides/IntroSlide';

import { PresentationType, SlideType } from '../types/presentationTypes';

type PresentationProps = {
  presentation: PresentationType;
  slideNumber?: number;
};

const Presentation = ({ presentation, slideNumber = 0 }: PresentationProps): JSX.Element => {
  const renderSwitch = (slide: SlideType): JSX.Element => {
    switch (slide.type) {
      case 'intro':
        return <IntroSlide slide={slide} />;

      default:
        return <DefaultSlide slide={slide} />;
    }
  }

  return (
    <x.div
      display="flex"
      h="100vh"
    >
      {presentation.slides.slice(slideNumber, slideNumber + 1).map(
        (slide, index) =>
        <SlideBase key={index} slide={slide}>
          {renderSwitch(slide)}
        </SlideBase>
      )}
    </x.div>
  );
}

export default Presentation;
