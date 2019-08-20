import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './App.css';
import ProfessorList from "./pages/professor_list";

// 아래 함수는 매 render 시마다 호출이 됩니다.
function App() {
    // 리액트 컴포넌트에서 UI 관련된 2가지 종류의 값
    //   - 속성값 : props => 부모로 부터 받는 값들
    //   - 상탯값 : state => 현재 컴포넌트가 직접 생성/관리하는 값들

    const [state, setState] = useState({ professorList: [] });

    // - intpus: 안 쓰면     => 매 render 완료시마다 호출
    // - inputs: []         =>  컴포넌트가 생성될 때, 1회만 호출
    // - inputs: [어떤상탯값] => 그 상태값이 변경될 때마다, 호출
    useEffect(() => {
        const fetchList = async () => {
            const url = "http://localhost:8000/univ/professor.json";
            const { data } = await Axios.get(url);
            console.log(data);
            setState({
                professorList: data
            });
        };
        fetchList();
    }, []);

    const { professorList } = state;
    return (
        <div>
            Hello React
            <ProfessorList professorList={professorList} />
        </div>
    );
}

export default App;
