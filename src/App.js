import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';

const HomePage = () => <div>HomePage</div>;
const PostListPage = () => <div>PostList 페이지</div>;
const ProfessorListPage = () =>
    <div>
        ProfessorList 페이지
        <ul>
            <li><a href="/professor/100">교수님 #100</a></li>
            <li><a href="/professor/200">교수님 #200</a></li>
            <li><a href="/professor/300">교수님 #300</a></li>
            <li><Link to="/professor/400">교수님 #400</Link></li>
            <li><Link to="/professor/500">교수님 #500</Link></li>
        </ul>
    </div>;
const ProfessorDetailPage = ({ match }) => {
    const {professor_id} = match.params;
    // useEffect(() => {
    //     // const {data} = Axios.get("..../...");
    // }, [professor_id]);
    return <div>Professor #{professor_id} Detail 페이지</div>;
}

const RouteNoMatch = () => <div>404 Page Not Found.</div>;

const activeStyle = {
    backgroundColor: 'yellow'
};

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>라우팅 샘플</h1>

                <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
                |
                <NavLink to="/posts" activeStyle={activeStyle}>포스팅목록</NavLink>
                |
                <NavLink to="/professor" activeStyle={activeStyle}>교수목록</NavLink>
                <hr />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/posts" component={PostListPage} />
                    <Route exact path="/professor/:professor_id" component={ProfessorDetailPage} />
                    <Route exact path="/professor" component={ProfessorListPage} />
                    <Route component={RouteNoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
