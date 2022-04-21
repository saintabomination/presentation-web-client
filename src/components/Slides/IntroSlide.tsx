import { x } from '@xstyled/styled-components';

import { SlideType } from '../../types/presentationTypes';

type SlideProps = {
  slide: SlideType;
};

const IntroSlide = ({ slide }: SlideProps): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      {slide.title ? <h1>{slide.title}</h1> : null}
      {slide.subtitle ? <h3>{slide.subtitle}</h3> : null}
    </x.div>
  );

export default IntroSlide;
