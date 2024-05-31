import React from 'react';

import Background from '../components/Background';

import reaper from '../image/clapReaper.png';
import { useNavigate } from 'react-router-dom';

const Success = (props) => {

  let navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }

  return (
    <div className={'w-full h-[100vh] flex justify-center items-center relative'}>
      <Background />
      <picture className={'h-full'}>
        <img className={'h-full'} src={reaper} alt="" />
      </picture>
      <div className={'absolute bottom-[20%] text-8xl'}>Success</div>
      <div onClick={goHome} className={'absolute bottom-[5%] right-[5%] border-2 bg-gray-900 w-44 h-36 rounded-3xl flex justify-center items-center cursor-pointer'}>홈으로...</div>
    </div>
  );
};

export default Success;