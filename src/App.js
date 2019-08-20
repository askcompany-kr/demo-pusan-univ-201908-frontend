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

    // - intpus: 안 쓰면     => 매 render 완료시마다 호출
    // - inputs: []         =>  컴포넌트가 생성될 때, 1회만 호출
    // - inputs: [어떤상탯값] => 그 상태값이 변경될 때마다, 호출
    useEffect(() => {
        const fetchList = async () => {
            const url = "http://localhost:8000/univ/professor.json";
            const { data } = await Axios.get(url);
            console.log(data);
            setState({
                ...state,  // 클래스형 컴포넌트에서는 불필요
                professorList: data
            });
        };
        fetchList();
    }, []);

    // 상탯값 query가 변경이 되면,
    // professorList를 필터링해서, 새로운 filteredProfessorList 배열을 만들겠다.
    const filteredProfessorList = useMemo(() => {
        return professorList.filter(professor =>
            (query.length === 0) ||
                (professor.name.indexOf(query) > -1)
        )
    }, [query, professorList]);

    const onChange = e => {
        // const query = e.target.value;
        const { value } = e.target;
        console.log(value);
        setState({
            ...state,  // 클래스형 컴포넌트에서는 불필요.
            query: value
        });
    };

    return (
        <div>
            Hello React
            <hr />

            <input type="text" onChange={onChange} />

            <hr />

            <ProfessorList professorList={filteredProfessorList} />
            <hr/>
            현재 상탯값 : {JSON.stringify(state)}
        </div>
    );
}

export default App;
