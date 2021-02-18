import Head from "next/head";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
