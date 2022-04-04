import { SlideType } from '../types/presentationTypes';

type SlideProps = {
  slide: SlideType;
};

const Slide = ({ slide }: SlideProps): JSX.Element =>
  (
    <div>
      {slide.title ? <h1>{slide.title}</h1> : null}
      {slide.points ? (
        <ul>
        {slide.points.map(
          (point, index) =>
          <li key={index}>{point}</li>
        )}
        </ul>
      ) : null}
    </div>
  );

export default Slide;
