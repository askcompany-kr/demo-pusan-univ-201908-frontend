import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
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

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>라우팅 샘플</h1>

                <Link to="/">Home</Link>
                |
                <Link to="/posts">포스팅목록</Link>
                |
                <Link to="/professor">교수목록</Link>
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
