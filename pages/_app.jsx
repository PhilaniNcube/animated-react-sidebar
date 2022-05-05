import '../styles/globals.css';
import { Fragment } from 'react';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Sidebar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
