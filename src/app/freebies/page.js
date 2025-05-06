import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/little-mumins-islamic-gift-name-little-mumins.jpg'
// import bgImage from '../assets/images/gifts.png'; // apni image ka path adjust karein
// import Story from '../OurStory/Story';
import Flowers from '../ShopNow/Flowers';
import FreeBies from './freebies';
const freebies = () => {
  return (
    <>
    <div
      className="h-[70vh]   bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className= "h-[70vh] text-[#d8d8d8] inset-0 bg-black/50  text-center pt-32">
        <h1 className="text-8xl font-bold">Little Mum&apos;ins Gifts</h1>
        
      </div>
      
    </div>
    <FreeBies/>
    <Flowers/>
    <Footer/>
    </>
  );
}

export default freebies;