import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/baali.jpg'; // apni image ka path adjust karein

export default function AboutPage() {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className="text-white text-center pt-32">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">Welcome to our journey!</p>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
