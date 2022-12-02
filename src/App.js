import "./App.css";
import Switch from "./Switch";
import { useState, useEffect } from "react";
function App() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [firstCardValue, setFirstCardValue] = useState(0);
  const [secondCardValue, setsecondCardValue] = useState(0);
  const [thirdCardValue, setThirdValue] = useState(0);
  useEffect(() => {
    if (btnClicked) {
      setFirstCardValue(19.99);
      setsecondCardValue(24.99);
      setThirdValue(39.99);
    } else {
      setFirstCardValue(199.99);
      setsecondCardValue(249.99);
      setThirdValue(399.99);
    }
  }, [btnClicked]);

  const btnToggled = () => {
    setBtnClicked(!btnClicked);
  };
  return (
    <main className="  font-Mont h-[100%] bg-VeryLightGrayishBlue">
      <div className=" absolute w-[80%]  h-[60%]  bg-top 	 left-[62%]  bg-[url('./images/bg-top.svg')] bg-contain "></div>
      <div className="     ">
        <h1 className=" text-GrayishBlue text-center text-4xl pt-10 ">
          Our Pricing
        </h1>
        <div className=" mt-6 w-[100%] mx-auto  justify-center flex items-center gap-6">
          <h2
            className={`${
              btnClicked ? "text-LightGrayishBlue" : "text-purple "
            }  "  text-lg  "`}
          >
            Annualy
          </h2>
          <Switch toggled={btnToggled} />
          <h2
            className={`${
              btnClicked ? " text-purple" : "text-LightGrayishBlue "
            }  "  text-lg  "`}
          >
            Monthly
          </h2>
        </div>
      </div>
      {/* cards container */}
      <div className=" relative container mt-8 flex flex-col gap-8 pb-20 ">
        <div className=" rounded-[10px]  bg-white shadow-lg w-[80%] mx-auto pb-10 p-5 flex flex-col items-center ">
          <h2 className="text-GrayishBlue text-2xl ">Basic</h2>
          <h3 className=" text-[4rem] py-4 text-DarkGrayishBlue ">
            ${firstCardValue}{" "}
          </h3>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">500 GB Storage</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">2 Users Allowed</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">Send up to 3 GB</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <button className=" hover:bg-white hover:text-purple hover:bg-gradient-to-r hover:from-white border-[1px]  hover:border-purple transition-all ease-out duration-300 hover:to-white   w-[80%] py-3 uppercase text-white rounded-[8px] text-[.9rem] mt-8 bg-gradient-to-r from-Lightblue to-purple ">
            Learn More
          </button>
        </div>
        <div className=" rounded-[10px]    bg-gradient-to-br from-Lightblue to-purple   shadow-lg w-[80%] mx-auto pb-10 p-5 flex flex-col items-center ">
          <h2 className="text-white text-2xl ">Professional</h2>
          <h3 className=" text-[4rem] py-4 text-white ">${secondCardValue} </h3>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-white text-[1rem] py-4 ">1 TB Storage</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-white text-[1rem] py-4 ">5 Users Allowed</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-white text-[1rem] py-4 ">Send up to 10 GB</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <button className=" transition-all ease-out duration-300  w-[80%] py-3 uppercase text-purple hover:text-white border-transparent border-[2px] hover:border-white  hover:bg-purple rounded-[8px] text-[.9rem] mt-8 bg-white ">
            Learn More
          </button>
        </div>
        <div className=" rounded-[10px]   bg-white shadow-lg w-[80%] mx-auto pb-10 p-5 flex flex-col items-center ">
          <h2 className="text-GrayishBlue text-2xl ">Master</h2>
          <h3 className=" text-[4rem] py-4 text-DarkGrayishBlue ">
            ${thirdCardValue}{" "}
          </h3>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">2 TB Storage</p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">
            10 Users Allowed
          </p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <p className=" text-GrayishBlue text-[1rem] py-4 ">
            Send up to 20 GB
          </p>
          <div className=" w-[90%] h-[2px] bg-LightGrayishBlue "></div>
          <button className=" hover:bg-white hover:text-purple hover:bg-gradient-to-r hover:from-white border-[1px]  hover:border-purple transition-all ease-out duration-300 hover:to-white   w-[80%] py-3 uppercase text-white rounded-[8px] text-[.9rem] mt-8 bg-gradient-to-r from-Lightblue to-purple ">
            Learn More
          </button>
        </div>
      </div>

      {/*  */}
    </main>
  );
}

export default App;
