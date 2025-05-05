import Image from "next/image";
import FooterEnd from "./Footer/FooterEnd";
import VillasRoom from "./Villas/Page";
import BgVedio from "./Vedio/BgVedio";
import Flowers from "./ShopNow/Flowers";
import NewArrivals from "./new_arrival/new_arrival";
import Circle from "./slider/page"
export default function Home() {
  return (
    <>
    <BgVedio /> 
    <NewArrivals/>
     <VillasRoom />
      <Circle/>
      <Flowers/>
      <FooterEnd />
 
     
    </>
  );
}
