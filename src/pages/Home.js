import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bestseller from "../components/layout/Bestseller";
import Middleadvertisment from "../components/layout/Middleadvertisment";
import NewArrival from "../components/layout/NewArrival";
import Offers from "../components/layout/Offers";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
      <Bestseller />
      <Middleadvertisment />
      <Offers />
    </>
  );
};

export default Home;
