import React, { useEffect, useState } from 'react';
import "../index.css"
import { ethers, Contract } from "ethers";
import { AVAXTRUCKS_ADDRESS, AVAXTRUCKS_ABI } from '../components/Contracts/AvaxTrucksContract';
import background from "../assets/avaxtrucks/background.png";
import hotpink from "../assets/avaxtrucks/Hot_Pink.png";


function Card({
  image,
  alt,
  title,
  link,
  line1,
  line2,
  line3,
  line4,
  totalminted,
  docs,
  setTxProcessing
}) {

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const [textinput, setTextinput] = useState("1");
  const [totalRemaining, setTotalRemaining] = useState("1");

  const textinputUser = (event) => {
    setTextinput(event.target.value);
  };

  let remaining;

  async function getRemainingNFTs() {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (AVAXTRUCKS_ABI && AVAXTRUCKS_ADDRESS && signer) {
          const contract = new Contract(AVAXTRUCKS_ADDRESS, AVAXTRUCKS_ABI, signer);
          let options = {
            value: ethers.utils.parseEther(".1"),
          };

          remaining = await contract.totalSupply();
          setTotalRemaining(remaining.toNumber());

        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setTxProcessing(false);
    }
  }

  useEffect(() => {
    getRemainingNFTs();
  }, [])


  async function mintNFT(setTxProcessing) {
    //setTxProcessing(true);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (AVAXTRUCKS_ABI && AVAXTRUCKS_ADDRESS && signer) {
          const contract = new Contract(
            AVAXTRUCKS_ADDRESS,
            AVAXTRUCKS_ABI,
            signer
          );

          let options = {
            // price is 1.5 avax
            value: ethers.utils.parseEther(`${textinput * 1.5}`),
          };

          let tx = await contract.mint(textinput, options);
          console.log(tx.hash);
          //setTxProcessing(false);
          /*alert(
            "Minted Successfully! View your NFT on Campfire, Kalao or Joepegs!"
          );*/
        } else {
          console.log("error with contract abi, address, or signer");
        }
      }
    } catch (error) {
      console.log("Error on mint");
      console.log(error);
      alert(error.data.message);
    } finally {
      //setTxProcessing(false);
    }
  }


  function alertClick() {
    alert("Wen Mint??!!!");
  }

  function alertClick1() {
    alert("Generating...");
  }

  const [showDocs, setShowDocs] = useState(true);

  return (


    <div className="items-center md:grid md:grid-cols-2 sm:grid-cols-1 hover:z-0 rounded shadow-lg bg-black bg-background bg-cover bg-opacity-90 opacity-90 duration-300 md:w-[600px] md:h-[500px] lg:h-auto lg:w-[800px] xl:w-[1050px] snap-start snap-mandatory z-0">
      <div>
        <img className="w-full md:pt-8 md:pl-10 lg:pl-8 text-black p-2 m:p-8" src={hotpink} alt={alt}></img>
        <div className="px-6 py-4">


          <div className="w-full flex pl-3 pb-5">
            <div className="flex pr-4 pt-1 pb-4">
              <input
                type="number"
                className="border-2 border-slate-600 bg-slate-400 text-left pixelated text-xl placeholder-slate-600 pl-2 pr-4 w-16"
                placeholder="Amount"
                value={textinput}
                onChange={textinputUser.bind(this)}
              />{" "}
            </div>
            <div className="w-full md:pb-3"><button
              className="m-1 w-full bg-black rounded-sm px-1 py-5 border-4 border-gray-200 text-white
     hover:bg-gray-200 hover:text-gray-900 duration-300 pixelated font-bold text-lg"

              onClick={() => mintNFT()}
            //onClick={alertClick}
            >
              Mint {textinput}
            </button></div>
            {/*<div className="w-full md:pb-2 pl-4"><button
              className="m-1 w-full rounded-sm px-1 py-1 border-2 border-gray-200 text-gray-200
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mansalva font-bold md:text-lg sm:text-base"

              onClick={() => claimNFT()}
            // onClick={alertClick}
            >
              Claim {textinput}
  </button></div>*/}
          </div>
        </div></div>

      <div className={`pr-8 pixelated text-white drop-shadow-2xl shadow-black w-full ${showDocs === true ? 'visible' : 'hidden'}`}>
        <div className='bg-black bg-opacity-60'>
          <div className='pr-4 md:pt-8 lg-pt-16 lg:text-4xl md:text-4xl w-full pt-4 sm:text-2xl pb-4'>Avax Trucks</div>
          <div className='lg:pt-2 xl:pt-20 sm:pt-4 md:text-3xl sm:text-lg w-full'>Supply: 10k</div>
          <div className='pt-4 sm:text-lg md:text-3xl w-full'></div>
          <div className='pt-4 sm:text-lg md:text-3xl w-full'>{line3}</div>
          <div className='pt-4 sm:text-lg md:text-3xl w-full'>{line4}</div>
          <div className='pt-4 md:pb-2 sm:text-lg md:text-lg lg:text-3xl w-full'></div></div>
        <div className='flex md:pt-0 lg:pt-0 xl:pt-24 pb-6 md:pb-6 sm:pt-4 sm:pb-2 text-lg w-full content-end p-4'><button
          className="m-1 w-1/2 rounded-sm pl-4 px-1 py-1 border-4 bg-black border-gray-200 text-white
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mansalva font-bold md:text-sm lg:text-lg"
          /*disabled={props.txProcesssing}
        onClick={() => mintNFT()}*/
          onClick={() => {
            setShowDocs((v) => !v);
          }}
        >
          Info
        </button><button
          className="m-1 w-1/2 rounded-sm px-1 py-1 border-4 bg-black border-gray-200 text-white
     hover:bg-gray-200 hover:text-gray-900 duration-300 font-mansalva font-bold md:text-sm lg:text-lg"
          /*disabled={props.txProcesssing}
        onClick={() => mintNFT()}*/
          onClick={onClickUrl("https://campfire.exchange/collections/0x20ef794f891c050d27bec63f50b202cce97d7224")}
        >
            View Collection
          </button></div>


      </div>
      <div className={`pr-8 pixelated text-white drop-shadow-2xl shadow-black w-full ${showDocs === true ? 'hidden' : 'visible'}`}>

        <div className='pixelated bg-black bg-opacity-60 text-white shadow-lg lg:pt-10 xl:pt-8 sm:pt-4 md:pt-10 xl:text-2xl lg:text-1xl md:text-base sm:text-lg w-full pb-10 px-4'>{docs}</div>

        <div className='md:pt-0 lg:pt-0 xl:pt-1 pb-2 md:pb-5 sm:pt-4 sm:pb-2 text-lg w-full place-content-end'><button
          className="m-1 w-2/3 rounded-sm px-1 py-1 border-2 border-gray-200 bg-black
     hover:bg-gray-200 hover:text-gray-900 duration-300 pixelated text-white shadow-lg font-bold text-lg"
          /*disabled={props.txProcesssing}
        onClick={() => mintNFT()}*/
          onClick={() => {
            setShowDocs((v) => !v);
          }}
        >
          Supply Data
        </button></div>


      </div>
    </div>




  )
}
export default Card;
