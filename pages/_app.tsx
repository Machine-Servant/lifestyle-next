import '../styles/globals.css';

type AppProps = {
  Component: React.ComponentClass;
  pageProps: Record<string, unknown>;
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  console.log('hi there');
  return <Component {...pageProps} />;
};

export default MyApp;
