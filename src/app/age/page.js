import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/baali.jpg';
import Flowers from '../ShopNow/Flowers';
const Age = () => {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className="text-white text-center pt-32">
        <h1 className="text-5xl font-bold">By AGE</h1>
        <p className="mt-4 text-xl">Welcome to our journey!</p>
      </div>
      
    </div>
   
    <Flowers/>
    <Footer/>
    </>
  );
}

export default Age;