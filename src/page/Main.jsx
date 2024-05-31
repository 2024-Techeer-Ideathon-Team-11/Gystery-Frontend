import React from "react";
import Background from "../components/Background";
import mainReaper from "../image/mainReaper.png";
import '../index.css';

function Main(props) {
  return <div className="w-full h-full flex flex-row items-center justify-center">
          <Background type="main"/>
      <div className = " flex justify-center items-center w-screen h-screen relative overflow-hidden">
        <h3 className="font-custom text-outline text-white text-[142px] absolute top-14 z-10">G Y S T E R Y</h3>
        <div className = "justify-center items-center flex-col flex w-[580px] abssolute">
          <img className=" w-full" src = {mainReaper}></img>
          <button className = "flex justify-center items-center absolute bottom-14 text-white font-custom text-[96px]  border-4 border-b-white-500 border-t-white-400 border-l-0 border-r-0 pb-2">start</button>
        </div>
    </div>
    <div className = "">
      <p></p>
    </div>
  </div>;
}

export default Main;