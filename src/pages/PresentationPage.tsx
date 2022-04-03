import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import { RootState } from '../redux/rootReducer';

const PresentationPage = (): JSX.Element => {
  const { socket } = useSelector((state: RootState) => state.presentation);

  socket.on('move_slide', (data: number) => {
    console.log(`Move Slide: ${data}`);
  });

  socket.on('reset_presentation', () => {
    console.log(`Reset Presentation`);
  });

  return (
    <DefaultLayout>
      <h1>Presentation Page</h1>
    </DefaultLayout>
  );
}

export default PresentationPage;
