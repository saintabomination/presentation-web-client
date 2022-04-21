import { x } from '@xstyled/styled-components';

import SlideFooter from './SlideComponents/SlideFooter';

import { SlideType } from '../../types/presentationTypes';

type SlideBaseProps = {
  slide: SlideType;
  children: React.ReactNode;
};

const SlideBase = ({ slide, children }: SlideBaseProps): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      p={8}
      w="100%"
      h="100%"
    >
      {children}
      {slide.footer ? (
        <SlideFooter entries={slide.footer} />
      ) : null}
    </x.div>
  );

export default SlideBase;
