import "../styles/globals.css";
import { DogsProvider } from "../context/DogsProvider";

export default function App({ Component, pageProps }) {
  return (
    <DogsProvider>
      <Component {...pageProps} />
    </DogsProvider>
  );
}
