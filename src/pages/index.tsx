import type { NextPage } from "next";
import CepPromise from "../Components/CepPromise";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CepPromise />
      <Footer />
    </>
  );
};

export default Home;
