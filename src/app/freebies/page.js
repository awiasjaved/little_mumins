import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/gifts.png'; // apni image ka path adjust karein
import Story from '../OurStory/Story';
import Flowers from '../ShopNow/Flowers';
import FreeBies from './freebies';
const freebies = () => {
  return (
    <>
    <div
      className="h-[50vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className="text-white text-center pt-32">
        <h1 className="text-8xl font-bold">Lttle Mum'mins Gifts</h1>
        
      </div>
      
    </div>
    <FreeBies/>
    <Flowers/>
    <Footer/>
    </>
  );
}

export default freebies;