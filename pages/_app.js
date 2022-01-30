import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    //  Layout is a component that will be rendered on every page.
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
