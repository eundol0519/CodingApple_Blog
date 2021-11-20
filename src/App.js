import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '동원이 귀여워']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
    </div >
  );
}

export default App;
