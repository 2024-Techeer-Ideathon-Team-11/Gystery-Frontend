import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import fierceReaper from '../image/fierceReaper.png';

function Fail() {
  const [hash, setHash] = useState(''); // 게임 해시
  const [isOpenCorrect, setIsOpenCorrect] = useState(false); // 정답 공개 여부
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden justify-center items-center">
      <Background type="" />
      <img src={fierceReaper} alt="fierceReaper" className="fixed w-1/3 z-0" />
      <h1 className="text-4xl text-white z-10 mt-32">Fail</h1>
      <div className="flex w-3/5 h-2/5 border-2 border-white bg-black bg-opacity-80 rounded-lg overflow-y-auto p-2 items-center m-2 z-10 text-lg">
        {isOpenCorrect ? (
          <p>당신의 여정은 성공했습니다.</p>
        ) : (
          <p>당신의 여정은 실패했습니다.</p>
        )}
      </div>
      <div className="flex flex-row w-3/5 justify-center items-center">
        <button
          className="w-1/2 flex m-2 justify-center items-center border-2 border-white bg-black bg-opacity-80 rounded-lg p-2 text-lg focus:border-white z-10"
          onClick={() => setIsOpenCorrect(true)}
        >
          정답보기
        </button>
        <button
          className="w-1/2 flex m-2 justify-center items-center border-2 border-white bg-black bg-opacity-80 rounded-lg p-2 text-lg focus:border-white z-10"
          onClick={() => navigate('/')}
        >
          다시하기
        </button>
      </div>
    </div>
  );
}

export default Fail;
