import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';

const ControlsPage = (): JSX.Element => {
  const { socket } = useSelector((state: RootState) => state.presentation);

  const handlePrevious = () => {
    socket.emit('move_slide', {
      data: -1,
      room: 1,
    });
  }

  const handleNext = () => {
    socket.emit('move_slide', {
      data: 1,
      room: 1,
    });
  }

  const handleReset = () => {
    socket.emit('reset_presentation', {
      room: 1,
    });
  }

  return (
    <DefaultLayout>
      <h1>Controls Page</h1>
      <p>For development purposes only.</p>
      <button onClick={() => handlePrevious()}>Previous slide</button>
      <button onClick={() => handleNext()}>Next Slide</button>
      <button onClick={() => handleReset()}>Reset</button>
    </DefaultLayout>
  );
}

export default ControlsPage;
