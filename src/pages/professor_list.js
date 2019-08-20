import React from 'react';

function ProfessorList(props) {
    console.log(props);
    // const key1 = props.key1;
    const { key1 } = props;
    return (
        <div>
            <h2>교수 목록</h2>
            ...
            {JSON.stringify(key1)}
        </div>
    );
}

export default ProfessorList;
