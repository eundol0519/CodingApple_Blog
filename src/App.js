import './App.css';
import React, { useState } from 'react';
// eslint-disable -> warning 보기 싫으면

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '동원이 귀여워']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [모달, 모달변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 입력값저장(){
    let newTitleArray = [...글제목, 입력값]
    // or
    // newTitleArray = [...글제목]
    // newTitleArray.unShift(입력값)
    // 글제목변경(newTitleArray)
    let newGoodArray = [...따봉, 0]
    글제목변경(newTitleArray)
    따봉변경(newGoodArray)
  }

  function 따봉갯수변경(index){
    let newGoodArray = [...따봉];
    newGoodArray[index] += 1;
    // newGoodArray[index] = newGoodArray[index] + 1
    따봉변경(newGoodArray)
  }

  function 제목바꾸기() {
    let newArray = [...글제목];
    // deep copy : [...배열 이름]
    // 값 공유 X, 서로 독립적인 값을 가지는 복사
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)
  }

  function 정렬하기() {
    let newArray = [...글제목];
    글제목변경(newArray.sort())
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      { // 변수명, 함수명 
        글제목.map((item, index) => {
          return (
            <div className="list" key={index}>
              <h4 onClick={() => { 모달변경(!모달); 누른제목변경(index) }}>{item} <span onClick={()=>{따봉갯수변경(index)}}>👍</span> {[따봉[index]]}</h4>
              <p>2월 17일 발행</p>
              <hr></hr>
            </div>
          );
        })
      }

      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={입력값저장}>저장</button>
      </div>
      
      <br/>

      <button onClick={ ()=>{ 모달변경(!모달) } }> 열고닫는버튼 </button>
      <button onClick={제목바꾸기}>글제목 변경 버튼</button>
      {/* ()=>{글제목변경(['여자 코트 추천', '강남 우동 맛집', '동원이 귀여워'])} */}
      <button onClick={정렬하기}>글제목 정렬 버튼</button>

      {
        (모달 == true) ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> : null
      }

      <Profile></Profile>
    </div >
  );
}

// 변수와 함수의 덩어리
// extends : 오른쪽에 있는 놈의 성질을 물려 받는다.
class Profile extends React.Component{
  constructor(){ // class의 변수/초기값을 저장 할 때 사용
    super();
    this.state = {name : "kim", age : 30}
    // state는 constructor 안에 작성
  }

  changeName(){
    this.setState({age : 19})
  }

  render(){
    return(
      <div>
        <hr/>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name}입니다.</p>
        <p>제 나이는 {this.state.age}입니다.</p>
        <button onClick={()=>{this.setState({name : "lee"})}}>버튼</button>
        {/* <button onClick={this.changeName.bing(this)}> 버튼 </button> */}
        {/* setState(변경할 state만 넣기) */}
      </div>
    );
  }
}

function Modal(props) { // Component 관습 1. 이름은 대문자로 시작한다.
  // Component 관습 2. return() 안에 있는 건 태그 하나로 묶어야 함
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
