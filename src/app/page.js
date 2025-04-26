import Image from "next/image";
import FooterEnd from "./Footer/FooterEnd";
import VillasRoom from "./Villas/Page";
import BgVedio from "./Vedio/BgVedio";
import Flowers from "./ShopNow/Flowers";
import NewArrivals from "./new_arrival/new_arrival";
export default function Home() {
  return (
    <>
    <BgVedio /> 
     <VillasRoom />
      <NewArrivals/>
      <Flowers/>
      <FooterEnd />
 
     
    </>
  );
}
