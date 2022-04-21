import { x } from '@xstyled/styled-components';

import DefaultSlide from './DefaultSlide';

import { SlideType } from '../../types/presentationTypes';

type SlideProps = {
  slide: SlideType;
};

const SlideBase = ({ slide }: SlideProps): JSX.Element =>
  (
    <x.div
      p={8}
      w="100%"
      h="100%"
    >
      <DefaultSlide slide={slide} />
    </x.div>
  );

export default SlideBase;
