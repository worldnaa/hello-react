import React from 'react';

function App() {
  const name = '리액트';
  const number = 0;
  const unde = undefined;

  return (
    <div>
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {number && <h1>내용</h1>} {/* 화면에 0 출력 */}
      {unde || '리액트 짱'}     {/* unde가 undefined면 리액트 짱 출력 */}

      {/* {name === '리액트' ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )} */}
    </div>
  );
}

export default App;
