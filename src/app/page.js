import Image from "next/image";
import FooterEnd from "./Footer/FooterEnd";
import VillasRoom from "./Villas/Page";
import BgVedio from "./Vedio/BgVedio";
import Flowers from "./ShopNow/Flowers";
export default function Home() {
  return (
    <>
    <BgVedio /> 
     <VillasRoom />

      <Flowers/>
      <FooterEnd />
 
     
    </>
  );
}
