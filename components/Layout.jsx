import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  const pageTitle = title ? `${title}` : "Gradiorum";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Gradiorum - Frontier of Innovation and Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black min-h-screen flex flex-col font-orbitron">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
