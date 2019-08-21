import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Modal, PageHeader, Table} from "antd";

const columns = [
    { title: '이름', dataIndex: 'name', key: 'name' },
    { title: '전화번호', dataIndex: 'phone', key: 'phone' }
];

const ProfessorListPage = () => {
    // const [state, setState] = useState({professorList: []});
    const [professorList, setProfessorList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [currentProfessor, setCurrentProfessor] = useState(null);

    useEffect(() => {
        const fetchList = async () => {
            const url = "http://localhost:8000/univ/professor.json";
            const {data} = await Axios.get(url);
            setProfessorList(data);
        };
        fetchList();
    }, []);

    const onRowClick = (record, index, e) => {
        console.log("onRowClick :", record);
        setCurrentProfessor(record);
        setIsVisible(true);
    };

    return (
        <div>
            <PageHeader title="교수목록" subTitle="subTitle" />

            <Table columns={columns}
                   dataSource={professorList}
                   pagination={false}
                   onRowClick={onRowClick}
            />

            <Modal title="Basic Modal"
                   visible={isVisible}
                   footer={null}
                   onCancel={() => setIsVisible(false)}>
                {currentProfessor !== null &&
                    <div>
                        <p>성함: {currentProfessor.name}</p>
                        <p>전화번호: {currentProfessor.phone}</p>
                    </div>
                }
            </Modal>
        </div>
    );
};

export default ProfessorListPage;
