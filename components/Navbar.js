import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineHome,
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import { GrMailOption } from "react-icons/gr";
import { useRouter } from "next/router";
import { config } from "@/config";
import { Address } from "fuels";

const Navbar = () => {
  const [seachOpen, setSeachOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [selectedButton, setSelectedButton] = useState("home");
  // const [walletConneted, setWalletConneted] = useState(false);
  const [user, setUser] = useState();

  const connectWallet = async () => {
    try {
      const w = window;
      const isConnected = await w.fuel.connect();
      console.log("Connection response", isConnected);
      if (isConnected) {
        const accounts = await w.fuel.accounts();
        console.log(accounts);
        // localStorage.setItem("publicKey", accounts[0]);
        // router.push("/u/chappie1");
        console.log(Address.fromAddressOrString(accounts[0]).toB256().slice(2));
        const response = await fetch(`${config.baseUrl}/profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            owner: Address.fromAddressOrString(accounts[0]).toB256().slice(2),
            // owner:
            // "6b63804cfbf9856e68e5b6e7aef238dc8311ec55bec04df774003a2c96e0418e",
          }),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setUser(data);
          // setWalletConneted(true);
        } else {
          await w.fuel.disconnect();
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // useEffect(() => {
  //   fetchUser();
  //   //   connectWallet();
  // }, []);

  // const fetchUser = async () => {
  //   try {
  //     const response = await fetch(`${config.baseUrl}/profile`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         owner:
  //           "6b63804cfbf9856e68e5b6e7aef238dc8311ec55bec04df774003a2c96e0418e",
  //       }),
  //     });
  //     const data = await response.json();
  //     const s = "chappie1";
  //     // s.length = 15;
  //     setUser(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const isButtonSelected = (buttonName) => {
    return selectedButton === buttonName
      ? "bg-gray-200 text-black"
      : "text-gray-700";
  };

  const toggleSearch = () => {
    if (ref.current.classList.contains("-translate-y-36")) {
      ref.current.classList.remove("-translate-y-36");
      ref.current.classList.add("-translate-y-0");
      setSeachOpen(true);
    } else if (!ref.current.classList.contains("-translate-y-36")) {
      ref.current.classList.remove("-translate-y-0");

      ref.current.classList.add("-translate-y-36");
      setSeachOpen(false);
    }
  };

  const ref = useRef();

  return (
    <>
      <div className=" sticky top-0 bg-white container mx-auto max-w-screen-xl px-5">
        <div className="p-4 flex flex-col md:flex-row md:justify-start justify-center items-center space-x-4 ">
          <button className="absolute left-3 top-4 text-3xl md:invisible sm:visible">
            {!seachOpen ? (
              <AiOutlineSearch onClick={toggleSearch} />
            ) : (
              <GiCancel onClick={toggleSearch} />
            )}
            <div
              ref={ref}
              className="search for mobile space-x-10 w-screen p-4  transform transition-transform -translate-y-36"
            >
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" focus:ring-purple-700 focus:outline-purple-400 block w-full rounded-xl p-2 pl-10 text-sm text-gray-900 border   bg-transparent"
                    placeholder="Search .."
                    required
                  />
                </div>
              </form>
            </div>
          </button>

          <div className="logo mx-5 cursor-pointer">
            <Link href={"/"}>
              {" "}
              <Image width={32} height={32} src="./logo.svg" alt="logo"></Image>
            </Link>
          </div>
          <div className="search space-x-10 invisible md:visible  ">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" focus:ring-purple-700 focus:outline-purple-400 block w-full rounded-xl p-2 pl-10 text-sm text-gray-900 border   bg-transparent"
                  placeholder="Search .."
                  required
                />
              </div>
            </form>
          </div>
          <div className="nav invisible md:visible">
            <ul className="flex items-center space-x-2">
              <Link href={"/"}>
                <li
                  onClick={() => handleButtonClick("home")}
                  className={`w-full cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3 ${isButtonSelected(
                    "home"
                  )}`}
                >
                  Home
                </li>
              </Link>
              <Link href={"/ExploreForHome"}>
                <li
                  onClick={() => handleButtonClick("explore")}
                  className={`w-full cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3 ${isButtonSelected(
                    "explore"
                  )} hover:bg-gray-200 hover:text-black`}
                >
                  Explore
                </li>
              </Link>

              <li
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                className={`w-full cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3 ${isButtonSelected(
                  "more"
                )} hover:bg-gray-200 hover:text-black`}
              >
                More
              </li>

              {dropdown && (
                <div
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setDropdown(false);
                    }, 1000);
                  }}
                  className="dropdown absolute left-[30rem] top-14 shadow-xl "
                >
                  <div
                    id="dropdown"
                    className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                  >
                    <ul className="py-2 font-semibold text-sm text-gray-700 ">
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100"
                        href={"/contact"}
                      >
                        <li>Contacts</li>
                      </Link>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        href={
                          "https://github.com/lensterxyz/lenster/issues/new?assignees=bigint&labels=needs+review&template=bug_report.yml"
                        }
                      >
                        {" "}
                        <li>Report a Bug</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="button absolute right-4 top-4">
            {user ? (
              <button className="bg-purple-500 hover:bg-purple-600 border-purple-600 focus:ring-purple-400 border text-white px-3 py-1 inline-flex items-center space-x-1.5 rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 disabled:opacity-50">
                <Image
                  className=""
                  width={16}
                  height={16}
                  src="/lens.png"
                  alt="login"
                ></Image>{" "}
                <div>{user.handle}</div>
              </button>
            ) : (
              <button
                className="bg-purple-500 hover:bg-purple-600 border-purple-600 focus:ring-purple-400 border text-white px-3 py-1 inline-flex items-center space-x-1.5 rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 disabled:opacity-50"
                onClick={connectWallet}
              >
                <Image
                  className=""
                  width={16}
                  height={16}
                  src="/lens.png"
                  alt="login"
                ></Image>{" "}
                <div>Login</div>
              </button>
            )}
          </div>
        </div>

        <div className="sm:visible md:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200  ">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium py-3">
            <Link href={"/"}>
              {" "}
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 text-2xl fill-blue-500"
              >
                <AiOutlineHome />
              </button>
            </Link>
            <Link href={"/ExploreForHome"}>
              {" "}
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 text-2xl"
              >
                <AiOutlineAppstore />
              </button>
            </Link>
            <Link href={"/"}>
              {" "}
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 text-2xl "
              >
                <AiOutlineBell />
              </button>
            </Link>
            <Link href={"/"}>
              {" "}
              <button
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 text-2xl"
              >
                <GrMailOption />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
