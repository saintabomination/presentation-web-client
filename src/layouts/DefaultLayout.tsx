import { Link } from 'react-router-dom';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
  (
    <>
      <h2>Page Navigation</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/presentation">Join</Link></li>
      </ul>
      {children}
    </>
  );

export default DefaultLayout;
