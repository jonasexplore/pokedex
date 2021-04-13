import "../styles/GlobalStyled.css";
import { ModalProvider } from "../contexts/ModalContext";
import { DataProvider } from "../contexts/DataContext";


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
      </DataProvider>
  );
}

export default MyApp;
