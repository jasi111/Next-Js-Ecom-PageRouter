// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context/CartContext";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return<>
   <Head>
        <title>My Page Title</title>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
  />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

      </Head>
   <ContextProvider>
   <Navbar/>
  <Component {...pageProps} />
  </ContextProvider>
  </> 
}
