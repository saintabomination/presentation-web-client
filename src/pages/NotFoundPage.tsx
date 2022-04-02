import DefaultLayout from '../layouts/DefaultLayout';

const NotFoundPage = (): JSX.Element =>
  (
    <DefaultLayout>
      <h1>Error 404</h1>
      <p>Page not found.</p>
    </DefaultLayout>
  );

export default NotFoundPage;
