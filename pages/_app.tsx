import "../styles/globals.css";

import AppLayout from "../components/AppLayout";
import Head from "next/head";

interface AppProps {
  Component: React.ElementType;
}

function MyApp({ Component }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
}

export default MyApp;
