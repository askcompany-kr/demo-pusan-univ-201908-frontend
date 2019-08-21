import React, {useEffect, useMemo, useState} from 'react';
import Axios from 'axios';
import './App.css';
import ProfessorList from "./pages/professor_list";

// 아래 함수는 매 render 시마다 호출이 됩니다.
function App() {
    // 리액트 컴포넌트에서 UI 관련된 2가지 종류의 값
    //   - 속성값 : props => 부모로 부터 받는 값들
    //   - 상탯값 : state => 현재 컴포넌트가 직접 생성/관리하는 값들

    const [state, setState] = useState({
        query: '',
        professorList: []
    });

    const { query, professorList } = state;

    const fetchList = async (params) => {
        const url = "http://localhost:8000/univ/professor.json";
        const { data } = await Axios.get(url, {params});
        console.log(data);
        setState({
            ...state,  // 클래스형 컴포넌트에서는 불필요
            professorList: data
        });
    };

    const onChange = e => {
        const {value} = e.target;
        setState({
            ...state,
            query: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("현재 query :", query);
        if (query.length === 0) {
            setState({
                ...state,
                professorList: []
            });
        }
        else {
            fetchList({ query })
        }
    };

    return (
        <div>
            Hello React
            <hr />
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                {/*<input type="submit" value="검색" />*/}
                <button>검색</button>
            </form>

            <hr />

            <ProfessorList professorList={professorList} />
            <hr/>
            현재 상탯값 : {JSON.stringify(state)}
        </div>
    );
}

export default App;
