import React from "react";
import Background from "../components/Background";
import mainReaper from "../image/mainReaper.png";
import '../index.css';
import { useNavigate } from "react-router-dom";


function Main(props) {
  const navigate = useNavigate();

  return <div className="w-full h-full flex flex-row items-center justify-center">
          <Background type="main"/>
      <div className = " flex justify-center items-center w-screen h-screen relative overflow-hidden">
        <h3 className="font-custom text-outline text-black text-[112px] absolute top-20 z-10">G Y S T E R Y</h3>
        <div className = "justify-center items-center flex-col flex w-[580px] abssolute">
          <img className=" w-full" src = {mainReaper}></img>
          <div className = "flex w-[360px] h-[120px] border-2 border-white bg-black bg-opacity-70 rounded-lg rounded-tl-none p-6 font-basic text-[24px] absolute right-64 top-80">
            <p>미스터리 해결의 여정을<br/> 시작하시겠습니까?</p>
          </div>
          <button onClick={()=>navigate('/game')} className = "flex justify-center items-center absolute bottom-14 text-white font-custom text-[64px]  border-4 border-b-white-500 border-t-white-400 border-l-0 border-r-0 pb-2 pl-10 pr-10">start</button>
        </div>
        
    </div>
    
  </div>;
}

export default Main;