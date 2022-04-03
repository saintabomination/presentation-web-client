import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';
import presentationActions from '../redux/actions/presentationActions';

const PresentationPage = (): JSX.Element => {
  const { socket, currentRoom, currentSlideNumber } = useSelector((state: RootState) => state.presentation);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('join_presentation', currentRoom);
    console.log(currentRoom);
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
      <h1>Presentation Page</h1>
      <p>{currentSlideNumber}</p>
    </DefaultLayout>
  );
}

export default PresentationPage;
