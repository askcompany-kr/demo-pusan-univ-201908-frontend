import React from 'react';
import './App.css';
import ProfessorList from "./pages/professor_list";

function App() {
    const professorList = [
        { name: '이진석', phone: '01012341234' },
        { name: '김딘딘', phone: '01045631023' },
        { name: '박갑돌', phone: '01009874514' }
    ];

    return (
        <div>
            Hello React
            <ProfessorList professorList={professorList} />
        </div>
    );
}

export default App;
