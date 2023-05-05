import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hideComponent, setHideComponent] = useState(false);

  useEffect(() => {
    
    if (router.pathname === "/contact" ||router.pathname === "/Profile"|| router.pathname==="/LoginPage" || router.pathname==="/CommentsPage") {
      setHideComponent(true);
    } else {
      setHideComponent(false);
    }
  }, [router.pathname]);

  return (
    <>
      
        <div className="">
          <Navbar />
          
          <Component {...pageProps} />
          
         {!hideComponent &&  <Footer className="" />}
        </div>
      
    </>
  );
}
