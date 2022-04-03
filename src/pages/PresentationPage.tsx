import DefaultLayout from '../layouts/DefaultLayout';
import { io } from 'socket.io-client';

const PresentationPage = (): JSX.Element =>
  (
    <DefaultLayout>
      <h1>Presentation Page</h1>
    </DefaultLayout>
  );

export default PresentationPage;
