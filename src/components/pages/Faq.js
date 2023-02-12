import React, { useState, useEffect } from "react";
import spotbot from "../../assets/avaxtrucks/background.png";
import Card from "../TierCards";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import "../../index.css";
import image from "../../assets/avaxtrucks/background.png";
import {Spring} from 'react-spring';

const Docs = ({
  account,
  web3Modal,
  loadWeb3Modal,
  web3Provider,
  setWeb3Provider,
  logoutOfWeb3Modal,
  txProcessing,
  setTxProcessing,
}) => {
  const [spotsMinted, setSpotsMinted] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

const observer = new IntersectionObserver(entries => {

})

  function alertClick() {
    alert("The Evolution is Coming Soon...");
  }
 
//Slider
const slideLeft = () => {
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 800
}
const slideRight = () => {
  var slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 800
}

  return (
    <div className="container flex-auto mx-auto w-full bg-transparent">
      <div className="pt-10 lg:pt-20 px-9 bg-transparent">
      
</div>
<div className='flex relative items-center overflow-hidden z-[0]'>
<MdChevronLeft onClick={slideLeft} size={40} className=' fill-white hover:scale-110 hover:fill-yellow-200 md:hidden hidden sm:hidden lg:block xl:block 2xl:block' />
<div id='slider' className="p-2 pt-6 sm:grid sm:grid-cols-1 md:flex gap-5 mansalva xl:flex-row font-mono text-black w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-mandatory snap-x bg-transparent">
      
      <div className="fade bg-opacity-90 pb-2">
      <Card 
      title="Bottom Tier"
      line1="True Underground"
      line2="250 NFTs or less"
      line3="Base Random Minting Contract"
      line4="IPFS hosted images and metadata"
      line5="Minting section on Main underground.tech page"
      line6="FREE"
      buttonText="Twitter"
    
      /></div>
 <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Bottom Mid Tier"
      line1="Underground-ish"
      line2="250-1000 NFTs"
      line3="Base Random Minting Contract"
      line4="IPFS hosted images and metadata"
      line5="Minting section on Main underground.tech page"
      line6="tba"
      buttonText="Twitter"
    
      /></div>
 <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Upper Mid Tier"
      line1="Underground?"
      line2="1000-5000 NFTs"
      line3="Base Random Minting Contract"
      line4="IPFS hosted images and metadata"
      line5="Minting section on Main underground.tech page"
      line6="tba"
      buttonText="Twitter"
    
      /></div>
          <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Middle Tier"
      line1="Independent-ish"
      line2="Up to 1000 NFTs"
      line3="Custom Contract"
      line4="IPFS hosted images and metadata"
      line5="Minting section on Main underground.tech page"
      line6="tba"
      buttonText="Twitter"
      
      /></div>
              <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Bot Upper Tier"
      line1="Independent"
      line2="Up to 1000 NFTs"
      line3="Base Random Minting Contract"
      line4="IPFS hosted images and metadata"
      line5="Custom sub-domain underground.tech page"
      line6="tba"
      buttonText="Twitter"
      
      /></div>
            <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Upper Tier"
      line1="Top Shelf Independent"
      line2="Up to 5000 NFTs"
      line3="Custom Contract"
      line4="IPFS hosted images and metadata"
      line5="Custom sub-domain underground.tech page"
      line6="tba"
      buttonText="Twitter"
      
      /></div>
     <div className="fade bg-opacity-80 pb-2">
      <Card 
      title="Elite"
      line1="No Boundary"
      line2="5000+ NFTs"
      line3="Complete Custom Build"
      line4="IPFS hosted images and metadata"
      line5="Custom sub-domain underground.tech page"
      line6="Contact for Pricing"
      buttonText="Twitter"
      
      /></div>
      </div>  
      <MdChevronRight onClick={slideRight} size={40} className=' fill-white hover:scale-110 hover:fill-yellow-200 hidden md:hidden sm:hidden lg:block xl:block 2xl:block' />
    </div>

    </div>
  );
};

export default Docs;
