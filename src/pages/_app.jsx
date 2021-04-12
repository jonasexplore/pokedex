import "../styles/GlobalStyled.css";
import { DataProvider } from "../contexts/DataContext";
import { ModalProvider } from "../contexts/ModalContext";

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
