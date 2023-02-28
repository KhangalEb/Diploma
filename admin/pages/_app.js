import "@/styles/globals.css";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    <Layout><Component {...pageProps} /></Layout>
  );
}
