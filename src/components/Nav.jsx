import React, { useState } from "react";
import LogoutButton from "./Logout";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";

export const Nav = ({
  account,
  web3Modal,
  loadWeb3Modal,
  web3Provider,
  setWeb3Provider,
  logoutOfWeb3Modal,
}) => {

  let Links = [
    { name: "Avax Trucks", link: "/" },
    { name: "Metamask Tutorial", link: "/docs" },
    { name: "Avalanche FAQ", link: "/faq" },
    { name: "Twitter", link: "https://twitter.com/AvaxTrucks" },
    { name: "Discord", link: "https://discord.com/invite/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav pb-20 md:pb-20 lg:pb-15 xl:pb-15 2xl:pb-15 z-10 relative">
      <div className="shadow-sm w-full fixed top-0 left-0 pb-0 md:pb-4 sm:pb-4 bg-avaxtruck-pink pt-4">
        <div className="flex items-center justify-between bg-avaxtruck-pink py-0 px-7">
          <div className="desktop-nav">
            <ul
              className={`overflow-y-visible xl:flex xl:items-center md:pb-0 sm:pb-0 absolute xl:static bg-avaxtruck-pink z-10 
    left-0 w-2/5 xl:w-auto xl:pl-0 pl-0 transition-all duration-300 ease-in ${open ? "top-[75px] opacity-100] overflow-y-visible" : "top-[-550px]"
                }`}
            >



              {Links.map((link) => (
                <li
                  key={link.name}
                  className="pixelated overflow-y-visible z-10 md:ml-8 lg:ml-8 xl:ml-8 xxl:ml-8 sm:text-2xl md:text-2xl text-2xl hover:text-white duration-300 md:my-4 lg:my-4 xl:my-0 xxl:my-0 my-4 pl-4"
                >
                  <a
                    target={
                      (link.name === "Twitter" ||
                        link.name === "Discord") &&
                      "_blank"
                    }
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute left-8 top-6 cursor-pointer xl:hidden z-10"
          >
            <GiHamburgerMenu name={open ? "close" : "menu"} />
          </div>
          <LogoutButton
            account={account}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            web3Provider={web3Provider}
            setWeb3Provider={setWeb3Provider}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
          />
        </div>
      </div>
    </nav>
  );
};
