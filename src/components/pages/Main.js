import React, { useState, useEffect } from "react";
import Card from "../../components/MainCard";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import "../../index.css";
import {Spring} from 'react-spring';
import FlippableCard from '../../components/flippable-card';


const Main = ({
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
    <div className="bg-transparent pt-10">
      
     

      <div className="sm:p-1 sm:pt-4 md:p-4 md:pt-24 bg-opacity-100 pixelated">
      <Card 
      alt="Avax Trucks"
      title="Avax Trucks"
      line3="Production Fee: tdb"
      line4="Max 10 per transaction"
      totalminted="Total Complete: 0/5000"
      docs="Avax Truck Description"
      setTxProcessing={setTxProcessing}
      /></div>
  
    
 
   
    </div>
  );
};

export default Main;
