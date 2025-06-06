import localFont from "next/font/local";
import TopNav from "./TopBar/TopNav";
import Loader2 from "./Loader2"; 
import { CartProvider } from "./context/CartContext";
import CartPopup from "./cartpopup";    
import "./globals.css";

const kepler = localFont({
  src: [
    {
      path: "../../public/Font/KeplerStd-BoldScnDisp.woff",
      weight: "200",
    },
  ],
  variable: "--font-kepler-std",
});

const bubbleGum = localFont({
  src: [
    {
      path: "../../public/Font/Chonky Bunny.ttf",
      weight: "400",
    },
  ],
  variable: "--font-bubblegum",
});

export const metadata = {
  title: "littlemumins",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/little.svg" type="image/svg+xml" />
        <link rel="icon" type="image/svg+xml" href="/little.svg" sizes="any" />
      </head>
      <body className={`${bubbleGum.className} antialiased`}>
        <Loader2 /> 
        <CartProvider>
          <TopNav />
          <CartPopup />
          {children} 
        </CartProvider>
      </body>
    </html>
  );
}
