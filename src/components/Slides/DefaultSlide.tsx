import { x } from '@xstyled/styled-components';

import { SlideType } from '../../types/presentationTypes';

type SlideProps = {
  slide: SlideType;
};

const DefaultSlide = ({ slide }: SlideProps): JSX.Element =>
  (
    <x.div>
      {slide.title ? <h1>{slide.title}</h1> : null}
      {slide.points ? (
        <ul>
        {slide.points.map(
          (point, index) =>
          <li key={index}>{point}</li>
        )}
        </ul>
      ) : null}
    </x.div>
  );

export default DefaultSlide;
