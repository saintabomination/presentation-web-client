import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Presentation from '../components/Presentation';

import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

const presentation = {
  slides: [
    {
      title: 'Intro',
    },
    {
      title: 'Slide 1',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
        'Point 5',
      ],
    },
    {
      title: 'Slide 2',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
      ],
    },
    {
      title: 'Slide 3',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
      ],
    },
    {
      title: 'Slide 4',
      points: [
        'Point 1',
        'Point 2',
        'Point 3',
        'Point 4',
        'Point 5',
      ],
    },
  ],
};

const PresentationPage = (): JSX.Element => {
  const { socket, currentRoom, currentSlideNumber } = useSelector((state: RootState) => state.presentation);
  const dispatch = useDispatch();

  if (currentRoom === -1) return <Navigate to="/presentation" replace />;

  useEffect(() => {
    socket.emit('join_presentation', currentRoom);
  }, []);
  
  useEffect(() => {
    socket.on('move_slide', (data: number) => {
      dispatch({
        type: presentationActions.MOVE_SLIDE,
        payload: data,
      });
    });

    socket.on('reset_presentation', () => {
      dispatch({
        type: presentationActions.RESET_PRESENTATION,
      });
    });
  }, [socket]);

  return (
    <DefaultLayout>
      <Presentation presentation={presentation} slideNumber={currentSlideNumber} />
    </DefaultLayout>
  );
}

export default PresentationPage;
