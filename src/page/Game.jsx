import React, { useState } from 'react';
import Background from '../components/Background';
import death from '../image/death.png';
import defaultReaper from '../image/defaultReaper.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';

function Game() {
  const [hash, setHash] = useState(''); // 게임 해시
  const [questionList, setQuestionList] = useState([
    'What is your name?',
    'How old are you?',
  ]); // 예시 데이터
  const [answerList, setAnswerList] = useState([
    'My name is John.',
    'I am 25 years old.',
  ]); // 예시 데이터
  const [hintCount, setHintCount] = useState(0); // 힌트 사용 횟수
  const [questionCount, setQuestionCount] = useState(0); // 질문 번호
  const [deathCount, setDeathCount] = useState(0); // 오답 카운트
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 오픈 여부
  const [menuIsOpen, setMenuIsOpen] = useState(false); // 드롭다운 메뉴 오픈 여부
  const [isEnterAnswer, setIsEnterAnswer] = useState(false); // 답변 입력 여부
  const [menuType, setMenuType] = useState(0); // 모달 메뉴 타입
  const [enterSentence, setEnterSentence] = useState(''); // 사용자가 입력한 질문 및 답변
  const [gameQuestion, setGameQuestion] = useState(''); // 게임 질문
  const [hint, setHint] = useState(''); // 힌트
  return (
    <div className="flex flex-row w-full h-full justify-center">
      <Background type="" />
      <div className="flex flex-row w-screen h-screen items-center justify-center">
        {/* 모달 */}
        {modalIsOpen && (
          <div
            className="fixed flex w-full h-full bg-black bg-opacity-70 z-30 justify-center items-center"
            onClick={() => {
              setModalIsOpen(false);
              setMenuType(0);
            }}
          >
            {/* 모달창 */}
            <div
              className="flex flex-col w-1/2 h-1/2 bg-zinc-900 rounded-lg shadow-lg p-4 border-2 border-zinc-400"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 취소 */}
              <div className="flex flex-row w-full justify-end">
                <button
                  className="w-6 h-6 z-10 m-2"
                  onClick={() => {
                    setModalIsOpen(false);
                    setMenuType(0);
                  }}
                >
                  <ClearIcon style={{ color: 'white' }} />
                </button>
              </div>
              {/* 모달창 본문 */}
              <div className="flex flex-col w-full h-full justify-center overflow-auto">
                {menuType === 1 && (
                  <div>
                    <h2 className="text-2xl mb-6">질문 목록</h2>
                    {questionList.map((question, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="font-bold">
                          Q{index + 1} : {question}
                        </div>
                        {answerList[index] && (
                          <div className="mt-2 mb-4">
                            A{index + 1} : {answerList[index]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {menuType === 2 && (
                  <div>
                    <h2 className="text-2xl">{hintCount}번째 힌트</h2>
                    <p>{hint}</p>
                  </div>
                )}
                {menuType === 3 && <div>{gameQuestion}</div>}
              </div>
            </div>
          </div>
        )}
        {/* 사신 */}
        <div className="flex w-1/3 flex-col justify-center items-center">
          <img className="w-72" src={defaultReaper} alt="defaultReaper" />
          <div className="flex flex-row items-center justify-center text-red-500">
            <img className="w-12" src={death} alt="death" />
            {deathCount}/10
          </div>
        </div>
        {/* 게임판 */}
        {questionCount === 0 && (
          <div className="flex w-2/3 h-full flex-col justify-center items-start ">
            <div className="flex w-3/5 h-1/2 border-2 border-white bg-black bg-opacity-70 rounded-lg rounded-tl-none overflow-y-auto p-2 items-center m-2 overflow-auto">
              {gameQuestion}
            </div>
            <div className="flex flex-row w-full">
              <input
                className="w-1/2 h-1/12 border-2 border-white bg-black bg-opacity-70 rounded-lg p-2 m-2 focus:border-white focus:outline-none"
                type="text"
                placeholder="질문을 입력하세요"
                value={enterSentence}
                onChange={(e) => setEnterSentence(e.target.value)}
              />

              <button
                className="w-1/12 h-1/12 border-2 border-white bg-black bg-opacity-70 rounded-lg p-2 text-sm m-2 focus:border-white"
                onClick={() => {
                  setEnterSentence('');
                  setQuestionCount(questionCount + 1);
                }}
              >
                제출
              </button>
            </div>
          </div>
        )}
        {questionCount !== 0 && (
          <div className="flex w-2/3 h-full flex-col justify-center items-start ">
            <div className="w-3/5 flex flex-row justify-end">
              <button
                className="w-6 h-6 z-10 m-2"
                onClick={() => {
                  setMenuIsOpen(!menuIsOpen);
                }}
              >
                <MoreVertIcon style={{ color: 'white' }} />
              </button>
              {menuIsOpen && (
                <div className="fixed mt-12 w-48 bg-zinc-900 rounded-lg shadow-lg z-20">
                  <ul className="">
                    <li
                      className="px-4 py-3 hover:bg-zinc-800 hover:rounded-t-lg cursor-pointer"
                      onClick={() => {
                        setModalIsOpen(true);
                        setMenuType(1);
                        setMenuIsOpen(false);
                      }}
                    >
                      전체 질문 목록 조회
                    </li>
                    <li
                      className="px-4 py-3 hover:bg-zinc-800 cursor-pointer"
                      onClick={() => {
                        if (hintCount === 3) {
                          alert('힌트 3번을 모두 사용하셨습니다.');
                          return;
                        }
                        setHintCount(hintCount + 1);
                        setModalIsOpen(true);
                        setMenuType(2);
                        setMenuIsOpen(false);
                      }}
                    >
                      힌트 사용하기
                    </li>
                    <li
                      className="px-4 py-3 hover:bg-zinc-800 hover:rounded-b-lg cursor-pointer"
                      onClick={() => {
                        setModalIsOpen(true);
                        setMenuType(3);
                        setMenuIsOpen(false);
                      }}
                    >
                      문제 보기
                    </li>

                    {questionCount !== 20 && (
                      <li
                        className="px-4 py-3 hover:bg-zinc-800 hover:rounded-b-lg cursor-pointer"
                        onClick={() => {
                          setIsEnterAnswer(!isEnterAnswer);
                          setMenuIsOpen(false);
                        }}
                      >
                        {isEnterAnswer ? '질문하기' : '답변하기'}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex w-3/5 h-1/6 border-2 border-white bg-black bg-opacity-70 rounded-lg rounded-tl-none overflow-y-auto p-2 items-center m-2">
              Q{questionCount} : &nbsp;
              {questionList[questionCount]
                ? questionList[questionCount]
                : '질문이 없습니다.'}
            </div>
            <div className="flex w-3/5 h-1/6 border-2 border-white bg-black bg-opacity-70 rounded-lg rounded-bl-none overflow-y-auto p-2 items-center m-2">
              A{questionCount} : &nbsp;
              {answerList[questionCount]
                ? answerList[questionCount]
                : '답변이 없습니다.'}
            </div>
            <div className="w-full flex flex-row">
              {isEnterAnswer ? (
                <input
                  className="w-1/2 h-1/12 border-2 border-white bg-black bg-opacity-70 rounded-lg p-2 m-2 focus:border-white focus:outline-none"
                  type="text"
                  placeholder="정답을 입력하세요"
                  value={enterSentence}
                  onChange={(e) => setEnterSentence(e.target.value)}
                />
              ) : (
                <input
                  className="w-1/2 h-1/12 border-2 border-white bg-black bg-opacity-70 rounded-lg p-2 m-2 focus:border-white focus:outline-none"
                  type="text"
                  placeholder="질문을 입력하세요"
                  value={enterSentence}
                  onChange={(e) => setEnterSentence(e.target.value)}
                />
              )}

              <button
                className="w-1/12 h-1/12 border-2 border-white bg-black bg-opacity-70 rounded-lg p-2 text-sm m-2 focus:border-white"
                onClick={() => {
                  setEnterSentence('');
                  if (isEnterAnswer) {
                  } else {
                    if (questionCount === 19) {
                      setIsEnterAnswer(true);
                    }
                    setQuestionCount(questionCount + 1);
                  }
                }}
              >
                제출
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
