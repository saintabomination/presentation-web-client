import DefaultLayout from '../layouts/DefaultLayout';

const ControlsPage = (): JSX.Element =>
  (
    <DefaultLayout>
      <h1>Controls Page</h1>
      <p>For development purposes only.</p>
      <button>Previous slide</button>
      <button>Next Slide</button>
      <button>Reset</button>
    </DefaultLayout>
  );

export default ControlsPage;
