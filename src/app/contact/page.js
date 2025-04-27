import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/contact.png'; // apni image ka path adjust karein
import Story from '../OurStory/Story';
import Flowers from '../ShopNow/Flowers';
import ContactUs from './contactus';
const contact = () => {
  return (
    <>
    <div
      className="h-[50vh] bg-cover bg-center rounded-b-3xl"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="text-white text-center pt-32">
        <h1 className="text-7xl font-bold">Contact US</h1>
        
      </div>
 
    </div>
    <ContactUs/>
    <Flowers/>
    <Footer/>
    </>
  );
}

export default contact;