import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hideComponent, setHideComponent] = useState(false);
  const [hideComponentNav, setHideComponentNav] = useState(false);

  useEffect(() => {
    if (
      router.pathname === "/contact" ||
      router.pathname === "/Profile" ||
      router.pathname === "/LoginPage" ||
      router.pathname === "/CommentsPage"||
      router.pathname === "/WelcomePage"||
      router.pathname === "/LoginPageWelcome"
    ) {
      setHideComponent(true);
    } else {
      setHideComponent(false);
    }
  }, [router.pathname]);
  useEffect(() => {
    if (
      router.pathname === "/WelcomePage" ||
      router.pathname === "/LoginPageWelcome"
    ) {
      setHideComponentNav(true);
    } else {
      setHideComponentNav(false);
    }
  }, [router.pathname]);

  return (
    <>
      <div className="">
        {!hideComponentNav && <Navbar />}

        <Component {...pageProps} />

        {!hideComponent && <Footer className="" />}
      </div>
    </>
  );
}
