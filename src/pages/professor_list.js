import React from 'react';


const Professor = ({ professor }) => {
    return (
        <li>
            {professor.name}
            {professor.phone}
        </li>
    );
};


class ProfessorList extends React.Component {
    render() {
        const {professorList} = this.props;
        return (
            <div>
                <h2>교수 목록</h2>
                {
                    professorList.map(professor =>
                        <Professor professor={professor} />
                    )
                }
            </div>
        );
    }
}


// function ProfessorList({ professorList }) {
//     return (
//         <div>
//             <h2>교수 목록</h2>
//             {
//                 professorList.map(professor =>
//                     <Professor professor={professor} />
//                 )
//             }
//         </div>
//     );
// }

export default ProfessorList;
