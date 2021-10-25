import "../styles/globals.css";

import AppLayout from "../components/AppLayout";

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
