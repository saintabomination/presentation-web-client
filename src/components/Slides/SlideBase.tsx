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
      backgroundImage={slide.backgroundImage ? `url('${slide.backgroundImage}')` : 'unset'}
      backgroundSize="cover"
      backgroundPosition="center"
      color={slide.slideColor ?? '#141414'}
    >
      {slide.darkenValue ? (
        <x.div
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          background="#000"
          opacity={slide.darkenValue}
          zIndex={1}
        />
      ) : null}
      {children}
      {slide.footer ? (
        <SlideFooter entries={slide.footer} />
      ) : null}
    </x.div>
  );

export default SlideBase;
