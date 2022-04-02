type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
  (
    <>
      {children}
    </>
  );

export default DefaultLayout;
