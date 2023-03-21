import Layout from "@/components/Layout.js/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ChakraProvider>
  );
}
