import Image from "next/image";
// import BannerSection from "./Banner/BannerSection";
import FooterEnd from "./Footer/FooterEnd";
// import MasterintArt from "./Mastering/MasterintArt";
// import VillasRoom from "./Villas/Page";
// import ExploreVisit from "./Explore/ExploreVisit";
// import ExtendPic from "./Extend/ExtendPic";
// import BespokeExperience from "./Bespok/BespokeExperience";
// import LatestStories from "./Latest/LatestStories";
// import StepInto from "./Step/StepInto";
import BgVedio from "./Vedio/BgVedio";
import GridTem from "./Grid/GridTem";
// import ReactHookForm from "./ReactForm/ReactHookForm";
// import ZodReactForm from "./ZodForm/ZodReactForm";
// import StopWacthS from "./StopWacth/StopWacthS";
import Flowers from "./ShopNow/Flowers";
import { Layout } from "lucide-react";
export default function Home() {
  return (
    <>
    <BgVedio />
  
       {/* <BannerSection/> */}
       
      {/* <MasterintArt /> */}
      {/* <VillasRoom /> */}
      {/* <ExploreVisit /> */}
      {/* <ExtendPic /> */}
      {/* <BespokeExperience /> */}
      {/* <LatestStories /> */}
      {/* <StepInto /> */}
      {/* <GridTem/> */}
      {/* <ReactHookForm/> */}
      {/* <ZodReactForm /> */}
      {/* <StopWacthS/> */}
      <Flowers/>
      <FooterEnd />
 
     
    </>
  );
}
